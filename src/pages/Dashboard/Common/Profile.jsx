import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useEffect, useState } from 'react';

const Profile = () => {
  const { user } = useAuth();
  const [mongoUser, setMongoUser] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/users?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setMongoUser(data.user);  
        }
      })
      .catch(err => console.log(err));
  }, [user]);

  if (!mongoUser) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5'>
        <img alt='cover photo'
          src="https://cdni.iconscout.com/illustration/premium/thumb/book-reader-illustration-svg-download-png-6738274.png"
          className='w-full mb-4 rounded-t-lg h-56'
        />

        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <img
            alt='profile'
            src={user?.photoURL}
            className='mx-auto object-cover rounded-full h-24 w-24 border-2 border-white'
          />

          <p className='p-2 px-4 text-xs text-white bg-lime-500 rounded-full'>
            {mongoUser.role}
          </p>

          <p className='mt-2 text-xl font-medium text-gray-800'>
            User Id: {mongoUser._id}
          </p>

          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600'>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-gray-600'>
                  {mongoUser.name}
                </span>
              </p>

              <p className='flex flex-col'>
                Email
                <span className='font-bold text-gray-600'>
                  {mongoUser.email}
                </span>
              </p>

              <div>
                <Link
                  to={`/update-user/${mongoUser._id}`}
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
