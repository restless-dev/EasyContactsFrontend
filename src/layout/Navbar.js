import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className='main-text'>EasyContacts</span>
            <FontAwesomeIcon icon={faUsers} className="main-icon" />
          </Link>
          <a href="https://github.com/restless-dev/EasyContactsBackend" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="git-icon"/>
          </a>  
          <Link className="btn btn-outline-light" id="btn-add" to="/add-contact">
            <FontAwesomeIcon icon={faUserPlus} className="mx-1" />
            <span className="add-main-text">Create New Contact</span>
          </Link>
        </div>  
      </nav>
    </div>
  )
}
