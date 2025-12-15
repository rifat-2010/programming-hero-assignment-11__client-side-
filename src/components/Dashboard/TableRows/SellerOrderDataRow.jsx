import { useState } from 'react';
import DeleteModal from '../../Modal/DeleteModal';
import { toast } from 'react-toastify';

const SellerOrderDataRow = ({ book, onDelete }) => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  // State for status dropdown
  const [status, setStatus] = useState(book?.status);

  // Delete handler
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/books/${book._id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Server error');

      const data = await res.json();

      if (data.success && data.result.deletedCount === 1) {
        toast.success('Book deleted successfully');
        onDelete(book._id);
        closeModal();
      } else {
        toast.error('Delete failed');
      }
    } catch (err) {
      toast.error('Delete failed');
      console.error(err);
    }
  };

  // ✅ Update book status in database
  const handleSave = async () => {
    try {
      const res = await fetch(`http://localhost:3000/books/status/${book._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success('Book status updated successfully');
      } else {
        toast.error(data.message || 'Status update failed');
      }
    } catch (err) {
      toast.error('Status update failed');
      console.error(err);
    }
  };

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{book?.title}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>${book?.price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{book?.author}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{status}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <select
          className='p-1 border-2 border-lime-300 rounded-md bg-white'
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value='published'>Published</option>
          <option value='unpublished'>Unpublished</option>
        </select>

        <button
          onClick={handleSave}
          className='btn bg-blue-600 hover:bg-blue-700 text-white font-semibold px-2 py-1 rounded ml-2'
        >
          Save
        </button>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span className='absolute inset-0 bg-red-200 opacity-50 rounded-full'></span>
          <span className='relative'>Delete</span>
        </button>

        <DeleteModal isOpen={isOpen} closeModal={closeModal} onConfirm={handleDelete} />
      </td>
    </tr>
  );
};

export default SellerOrderDataRow;
