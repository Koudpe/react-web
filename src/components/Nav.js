import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal"

import "../css/Nav.css";

const Nav = () => {
  return (
    <div className='navigation'>
      <div className='nav-link-wrap'>
        <Link className="nav-link" to='/'>Home</Link>
      </div>
      <div className='nav-link-wrap'>
        <Link className="nav-link" to='/Notes'>Notes</Link>
      </div>
      <div className='nav-link-wrap'>
        <Link className="nav-link" to='/Timer'>Timer</Link>
      </div>
      {/* <Modal/> */}
    </div>
  );
};

export default Nav;
