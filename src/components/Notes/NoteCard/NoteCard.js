import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../redux/notes/note_actions";
import './Notestyle.css'

export default function NoteCard({ title, body, _id }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [tempTitle, setTitle] = useState(title);
  const [tempBody, setBody] = useState(body);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const updateNote = () => {
    dispatch(updateNotes(_id, { title: tempTitle, body: tempBody }));
    closeModal();
  };

  return (
    <div className="note-card-container">
      <div className="card" align={"center"}>
        <div className="card-header">
          <h1 className="title">{title}</h1>
        </div>
        <div className="card-body">
          <p className="body">{body}</p>
        </div>
        <div className="card-footer">
          <div className="buttons-container">
            <>
              <button className="update-button" onClick={openModal}>
                Update
              </button>
{isOpen && (
  <div className="edit-mode">
    <div className="edit-content">
      <h2>Update Note</h2>
      <button onClick={closeModal}>&times;</button>
      <div className="edit-form">
        <input
          value={tempTitle}
          placeholder={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={tempBody}
          placeholder={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button className="update-note-button" onClick={updateNote}>
          Update
        </button>
        <button onClick={closeModal} className="cancel-button">
          Cancel
        </button>
      </div>
    </div>
  </div>
)}
            </>
            <button
              className="delete-button"
              onClick={() => {
                dispatch(deleteNotes(_id));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
            }  