import React from 'react';
import './Header.css';
import {
    FiHome,
    FiSearch,
    FiUser,
    FiBell
} from 'react-icons/fi'
import { Link } from 'react-router-dom';

export default () => {
    return (
        <nav className="nav header bg-app fixed-top">
            <Link to='/' className='active-app'>
                <FiHome />
            </Link>
            {/* <input /> */}
            <Link to='/notifications'>
                <FiBell />
            </Link>
            <FiSearch />
            <Link to='/signup'>
                <FiUser />
            </Link>
        </nav>
    )
}

