import NavItem from "../NavItem/NavItem";
import HomeIcon from "../Icons/HomeIcon";
import BookingIcon from "../Icons/BookingIcon";
import CalenderIcon from "../Icons/CalenderIcon";
import InboxIcon from "../Icons/InboxIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import Style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={Style.navbar}>
      <NavItem Icon={<HomeIcon />} text={"Home"} />
      <NavItem Icon={<BookingIcon />} text={"Booking"} />
      <NavItem Icon={<CalenderIcon />} text={"Calender"} />
      <NavItem Icon={<InboxIcon />} text={"Inbox"} to={"./chats"}/>
      <NavItem Icon={<ProfileIcon />} text={"Profile"} />
    </div>
  );
};

export default NavBar;
