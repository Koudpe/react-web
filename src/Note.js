import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import NoteList from "./components/NoteList";
import "./css/Note.css";
import { nanoid } from "nanoid";

const Note = () => {
  const [notes, setNotes] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div>
      <Search setSearch={setSearch} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(search)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default Note;
