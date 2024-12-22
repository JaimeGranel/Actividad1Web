import React from 'react';
import '../styles/Header.css';

const Header = ({ title, searchPlaceholder, searchTerm, setSearchTerm }) => (
    <header className="header">
        <h1 className="header__title">{title}</h1>
        <input
            type="text"
            className="header__search"
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    </header>
);
export default Header;