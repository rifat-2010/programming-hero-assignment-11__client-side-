import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';
import coverImg from '../../../assets/project-logo.png';

const Profile = () => {
  const { user } = useContext(AuthContext);
  
  // ধরো MongoDB _id আগেই context এ আছে বা আগের page থেকে fetch করা
  const mongoId = "6936e09fd21c10f4b09263ce"; // উদাহরণ purpose

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5'>
        <img alt='cover photo' src={coverImg} className='w-full mb-4 rounded-t-lg h-56' />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <img
            alt='profile'
            src={user?.photoURL}
            className='mx-auto object-cover rounded-full h-24 w-24 border-2 border-white'
          />
          <p className='p-2 px-4 text-xs text-white bg-lime-500 rounded-full'>Customer</p>
          <p className='mt-2 text-xl font-medium text-gray-800'>User Id: {mongoId}</p>

          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600'>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-gray-600'>{user?.displayName}</span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-gray-600'>{user?.email}</span>
              </p>
              <div>
       <Link
        to={`/update-user/${mongoId}`}
        className='bg-lime-500 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-lime-800 block mb-1'
        >
          Update Profile
      </Link>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
