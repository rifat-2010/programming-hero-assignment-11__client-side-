import { BsFingerprint } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import MenuItem from "./MenuItem";

const UserMenu = () => {


  return (
    <>
      <MenuItem icon={BsFingerprint} label="My Orders" address="my-orders" />
      <MenuItem icon={AiOutlineAppstoreAdd} label="My Wishlist" address="my-wishlist" />


    </>
  );
};

export default UserMenu;
