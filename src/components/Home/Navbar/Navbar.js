import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../redux/users/user_types';
import './Navbar.css';

function Navbar() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.userReducer);

  return (
    <>
      <div className="navbar-container">
        <button className="brand" onClick={() => { nav('/'); }}>
          Home
        </button>
        <div className="buttons-container">
          <div style={{ display: auth ? 'block' : 'none' }}>
            <button
              className="logout-button"
              onClick={() => { dispatch({ type: LOGOUT }); }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
