import React, { useState } from "react";

const NewNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if(noteText.trim().length > 0){
      handleAddNote(noteText);
      setNoteText("");
    }
  }

  return (
    <div className='note-card-wrap'>
      <div className='note-card'>
        <div className='note-content'>
          <div className='note-card-text'>
            <textarea
              type='text'
              rows="8"
              cols="10"
              placeholder='New note...'
              value={noteText}
              onChange={handleChange}
            />
          </div>
          <div className='note-card-footer'>
            <p>Remaining: {characterLimit - noteText.length}</p>
            <button className='button--add' onClick={handleSaveClick}>ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
