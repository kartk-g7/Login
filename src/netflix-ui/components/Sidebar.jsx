import React from 'react';
import { FaHome, FaSearch, FaTv, FaFilm, FaList } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <span className="netflix-n">N</span>
            </div>
            <div className="sidebar-menu">
                <div className="sidebar-item active">
                    <FaHome className="sidebar-icon" />
                    <span className="sidebar-text">Home</span>
                </div>
                <div className="sidebar-item">
                    <FaSearch className="sidebar-icon" />
                    <span className="sidebar-text">Search</span>
                </div>
                <div className="sidebar-item">
                    <FaTv className="sidebar-icon" />
                    <span className="sidebar-text">TV Shows</span>
                </div>
                <div className="sidebar-item">
                    <FaFilm className="sidebar-icon" />
                    <span className="sidebar-text">Movies</span>
                </div>
                <div className="sidebar-item">
                    <FaList className="sidebar-icon" />
                    <span className="sidebar-text">My List</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
