import React from "react";
import SingleNote from "./SingleNote";
import NewNote from "./NewNote";

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className='container container--nopadding'>
      <div className='note-wrapper'>
        {notes.map((note) => (
          <SingleNote
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
        <NewNote handleAddNote={handleAddNote} />
      </div>
    </div>
  );
};

export default NoteList;
