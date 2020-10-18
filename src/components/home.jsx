import homeStyles from "./home.module.scss"
import React from "react"
import Guy from "../images/guy.svg"
import Rect from "../images/Rectangle.png"

const Home = () => {

    return (
        <div className={homeStyles.home}>
            <div className={homeStyles.grid}>
                <div style={{ overflow: "hidden", height: "100%" }}>
                    <div className={homeStyles.welcome}>
                        <h1>Hello my name is George Kandalaft</h1>
                        <h2>A Software Developer and a Designer</h2>
                        <button><h3>Learn More</h3></button>
                        {/* <div className={homeStyles.button}>Learn More</div> */}
                    </div>
                    <img src={Rect} alt="rectangular" className={homeStyles.rect} data-sal-delay="400"
                        data-sal-easing="ease"
                        data-sal-duration="1500"
                        data-sal="slide-right"/>
                </div>
                <img alt="guy" src={Guy} className={homeStyles.guy} />
            </div>
            <div className={homeStyles.rect}>

            </div>
        </div>
    )
}
export default Home