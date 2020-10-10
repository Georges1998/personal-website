import React from 'react'
import Footer from "./footer"
import Home from "./../home"
import AboutMe from "./../aboutMe"
import Header from './header'
import Title from './title'

const Layout = () => {
    return (
        <div>
            <Header />
            <Home />
            <Title name="About Me" />
            <AboutMe />
            <Footer />
        </div>
    )
}

export default Layout