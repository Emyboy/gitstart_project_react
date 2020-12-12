import React from 'react';
import './Header.css';
import { FiAlignLeft, FiSearch } from 'react-icons/fi'

export default () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top menu header pt-4 pb-4 clearfix fixed-top shadow-sm bg-app">
            <div className="container">
                <FiAlignLeft />
                <input />
                <FiSearch />
            </div>
        </nav>
    )
}

