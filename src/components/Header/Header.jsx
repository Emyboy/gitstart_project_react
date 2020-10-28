import React from 'react';
import './Header.css';
import { FiAlignLeft, FiSearch } from 'react-icons/fi'

export default () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top menu header">
            <div className="container">
                <FiAlignLeft />
                <input />
                <FiSearch />
            </div>
        </nav>
    )
}

