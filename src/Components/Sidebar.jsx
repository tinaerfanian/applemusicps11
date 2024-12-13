// src/Components/Sidebar.jsx

import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaPodcast, FaNewspaper, FaSearch } from "react-icons/fa";  // Importa l'icona FaSearch
import "./Css/Sidebar.css"; // Importa il CSS per lo stile
import logo from './../Assets/logos/music.svg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        {/* Logo come immagine */}
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        {/* Search bar */}
        <div className="searchbar">
          <FaSearch className="search-icon" />  {/* Icona della lente di ingrandimento */}
          <input type="text" placeholder="Cerca" />
        </div>

        {/* Links con icone */}
        <div className="links">
          <div className="link-item">
            <FaHome /> <a href="#">Home</a>
          </div>
          <div className="link-item">
            <FaNewspaper /> <a href="#">Novità</a>
          </div>
          <div className="link-item">
            <FaPodcast /> <a href="#">Radio</a>
          </div>
         
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Sidebar;
