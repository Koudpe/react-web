import React from "react";

const SingleNote = ({text, date, id, handleDeleteNote}) => {
  return (
    <div className='note-card-wrap'>
      <div className='note-card'>
        <div className='note-content'>
          <div className='note-card-text'>
            <p>{text}</p>
          </div>
          <div className='note-card-footer'>
            <p>{date}</p>
            <button className='button--remove' onClick={() => handleDeleteNote(id)}>X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNote;
