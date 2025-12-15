import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { MdOutlineManageHistory } from "react-icons/md";



const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='All Users' address='manage-users' />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Books"
        address="manage-orders"
      />
    </>
  )
}

export default AdminMenu
