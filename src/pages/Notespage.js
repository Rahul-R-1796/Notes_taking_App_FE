import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes, createNotes } from '../redux/notes/note_actions';
import NoteCard from '../components/Notes/NoteCard/NoteCard';
import './Notespage.css';

export default function Notespage() {
  const dispatch = useDispatch();
  const {data } = useSelector((state) => state.noteReducer);
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setNotes(data);
    }
  }, [data]);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createNote = () => {
    dispatch(createNotes({ title, body }));
    closeModal();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`notes-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="theme-toggle-button" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="notes-grid">
        {filteredNotes.map((el, index) => (
          <NoteCard key={index} {...el} />
        ))}
      </div>
      <button className="add-note-btn" onClick={openModal}>
        +
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create New Note</h2>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-body">
              <input
                className="modal-input"
                value={title}
                placeholder="Please enter title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="modal-textarea"
                value={body}
                placeholder={'Please enter description'}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button className="modal-button" onClick={createNote}>
                Create
              </button>
              <button className="modal-button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
