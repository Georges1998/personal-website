import React from 'react'
import Footer from "./footer"
import Home from "./home"
import Header from './header'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <Home />
            { props.children}
            <Footer />
        </div>
    )
}

export default Layout