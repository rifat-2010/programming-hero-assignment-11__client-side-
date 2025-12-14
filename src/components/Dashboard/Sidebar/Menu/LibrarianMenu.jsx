import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import { FaBook } from "react-icons/fa6";

import MenuItem from "./MenuItem";
import MyOrdersMenu from "./MyOrdersMenu";

const LibrarianMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label="Add Book" address="add-book" />
      <MenuItem icon={MdHomeWork} label="My Books" address="my-books" />
      <MyOrdersMenu icon={FaBook} label="orders" address="my-orders" />
    </>
  );
};

export default LibrarianMenu;
