import { useEffect, useState } from "react";
import UserDataRow from "../../../components/Dashboard/TableRows/UserDataRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosSecure.get("/all-users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [axiosSecure]);

  return (
    <div className='container mx-auto px-4 sm:px-8'>
      <div className='py-8'>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th className='px-5 py-3 bg-white border-b text-left text-sm uppercase'>
                    Email
                  </th>
                  <th className='px-5 py-3 bg-white border-b text-left text-sm uppercase'>
                    Role
                  </th>
                  <th className='px-5 py-3 bg-white border-b text-left text-sm uppercase'>
                    Status
                  </th>
                  <th className='px-5 py-3 bg-white border-b text-left text-sm uppercase'>
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map(user => (
                  <UserDataRow key={user._id} user={user} />
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
