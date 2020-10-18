import aboutMeStyles from "./about.module.scss"
import Me from "../images/pic.png"
import Leaf from "../images/leaf.png"
import Leaf2 from "../images/leaf2.png"
import mail from "../images/mail.svg"
import insta from "../images/insta.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"
import React from "react"

const AboutMe = () => {
    return <div className={aboutMeStyles.aboutMe}>
        <div className={aboutMeStyles.decoration}><img src={Leaf} alt="leaf" style={{ width: "25vw" }}
            data-sal-delay="400"
            data-sal-easing="ease"
            data-sal-duration="1500"
            data-sal="slide-right" /></div>
        <div className={aboutMeStyles.card}>
            <div className={aboutMeStyles.description}>
                <div className={aboutMeStyles.aboutMeText}>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, fugit cupiditate. Eligendi animi aliquam
                    rem iure, accusamus perferendis, porro
                    facilis sapiente nihil non veniam laboriosam doloribus esse, eos itaque nostrum.
                    </h2>  </div>
                <button className={aboutMeStyles.button}><h3>Contact Me</h3></button>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <img src={mail} alt="mail" />
                    <img src={github} alt="github" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={insta} alt="insta" />
                </div>
            </div>
            <img src={Me} alt="personal" className={aboutMeStyles.image} />
        </div>
        <div className={aboutMeStyles.decoration}><img src={Leaf2} alt="leaf" style={{ width: "100%" }} data-sal-delay="400"
            data-sal-easing="ease"
            data-sal-duration="1500"
            data-sal="slide-left" /></div>
    </div>
}

export default AboutMe