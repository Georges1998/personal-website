import aboutMeStyles from "./about.module.scss"
import Me from "../images/pic.png"
import Leaf from "../images/leaf.png"
import Leaf2 from "../images/leaf2.png"
import React from "react"

const AboutMe = () => {
    return <div className={aboutMeStyles.aboutMe}>
        <div className={aboutMeStyles.decoration}><img src={Leaf} alt="leaf" style={{width:"25vw"}} /></div>
        <div className={aboutMeStyles.card}><div></div> <img src={Me} alt="personal" className={aboutMeStyles.image} /></div>
        <div className={aboutMeStyles.decoration}><img src={Leaf2} alt="leaf" style={{width:"100%"}} /></div>
    </div>
}

export default AboutMe