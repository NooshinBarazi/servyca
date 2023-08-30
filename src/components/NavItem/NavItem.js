import React from "react";
import Style from "./NavItem.module.scss";
import { Link} from "react-router-dom";

const NavItem = ({ Icon, text, link }) => {
  return (
    <Link to={link} className={Style.nav_item} >
      <span>{Icon}</span>
      <p>{text}</p>
    </Link>
  );
};

export default NavItem;
