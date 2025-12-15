import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
// import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { toast } from 'react-toastify'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const UpdateUserRoleModal = ({ isOpen, closeModal, user }) => {
  const [updatedRole, setUpdatedRole] = useState(user.role)
  const axiosSecure = useAxiosSecure()

  const handleUpdateRole = async () => {
    try {
      const res = await axiosSecure.put(
        `/users/role/${user._id}`,
        { role: updatedRole }
      )

      if (res.data.success) {
        toast.success('User role updated')
        closeModal()
      }
    } catch (err) {
      toast.error('Failed to update role')
      console.error(err)
    }
  }

  return (
    <Dialog
      open={isOpen}
      as='div'
      className='relative z-10 focus:outline-none'
      onClose={closeModal}
    >
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <DialogPanel
            transition
            className='w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl'
          >
            <DialogTitle
              as='h3'
              className='text-base/7 font-medium text-black'
            >
              Update User Role
            </DialogTitle>

            <div>
            <select
              value={updatedRole}
              onChange={e => setUpdatedRole(e.target.value)}
              className='w-full my-3 border border-gray-200 rounded-xl px-2 py-3'
            >
              <option value='user'>User</option>
              <option value='librarian'>Librarian</option>
              <option value='admin'>Admin</option>
            </select>

            </div>

            <div className='flex mt-2 justify-around'>
              <button
                type='button'
                onClick={handleUpdateRole}
                className='cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200'
              >
                Update
              </button>

              <button
                type='button'
                onClick={closeModal}
                className='cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200'
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default UpdateUserRoleModal
