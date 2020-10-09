import React from 'react';
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header>
            <h1 className={headerStyles.link}>Home</h1>
            <h1>About</h1>
            <h1>Contact</h1>
        </header>
    )
}
export default Header