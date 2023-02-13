import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* link is bit a old style to do routing in react */}
      {/* <Link to='/'>APP</Link>
    <br />
    <Link to='/about'>AboutUs</Link>
    <br />
    <Link to='/contactus'>ContactUS</Link> */}

      {/* in new method the link is replace with NavLink to provide a internally css attribute */}
      <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/">
          Home
        </NavLink>
        <br />
        <NavLink exact activeClassName="active_class" to="/about">
          AboutUs
        </NavLink>
        <br />
        <NavLink exact activeClassName="active_class" to="/users">
          Users
        </NavLink>
        <br />
        <NavLink exact activeClassName="active_class" to="/services">
          Services
        </NavLink>
        <br />
        <NavLink exact activeClassName="active_class" to="/contactus">
          ContactUS
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
