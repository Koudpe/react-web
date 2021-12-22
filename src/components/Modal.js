import React from "react";
import Input from "./Input";

const Modal = ({ setShowModal, showModal }) => {
  const handleClose = () => {
    setShowModal();
  };

  const openProfile = () => {
    handleClose();
  };
  return (
    <div>
      {showModal ? (
        <div className='modal-wrapper'>
          <div className='modal-wrap'>
            <div className='modal-cross-wrap' onClick={handleClose}>
              <span className='modal-cross'></span>
            </div>
            <div className='modal modal--small'>
              <p className='modal-text'>Login</p>
              <Input type='text' placeholder='Username' />
              <Input type='password' placeholder='Password' />
              <div className='button-wrap'>
                <button className='button--login' onClick={openProfile}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
