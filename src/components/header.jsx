import React from 'react';
import headerStyles from './header.module.scss'


const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact</h1>
        </header>
    )
}
export default Header