import React from 'react'
import Footer from "./footer"
import Home from "./home"
import Header from './header'
import Title from './title'
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
const Layout = () => {
    return (
        <div>
            <Header />
            <Home />
            {/* { props.children} */}
            {/* <Welcome name="Sara" /> */}
            <Title name="About Me" /> 
            <Footer />
        </div>
    )
}

export default Layout