import React from "react";
import Input from "./Input";

const Modal = () => {
  return (
    <div className='modal-wrapper'>
      <div className='modal-wrap'>
        <div className='modal-cross-wrap'>
          <span className='modal-cross'></span>
        </div>
        <div className='modal modal--small'>
          <p className='modal-text'>Login</p>
          <Input type='text' placeholder='Username' />
          <Input type='password' placeholder='Password' />
        </div>
      </div>
    </div>
  );
};

export default Modal;
