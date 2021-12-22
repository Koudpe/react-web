import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

import "../css/Nav.css";

const Nav = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className='navigation'>
      <div className='nav-link-wrap'>
        <Link className='nav-link' to='/'>
          Home
        </Link>
      </div>
      <div className='nav-link-wrap'>
        <Link className='nav-link' to='/Notes'>
          Notes
        </Link>
      </div>
      <div className='nav-link-wrap'>
        <Link className='nav-link' to='/Todo'>
          Todo
        </Link>
      </div>
      <div className='nav-link-wrap'>
        <Link className='nav-link' to='/Weather'>
          Weather
        </Link>
      </div>
      <div className='nav-link-wrap'>
        <p className='nav-link' onClick={openModal}>
          Login
        </p>
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
};

export default Nav;
