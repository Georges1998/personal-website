import homeStyles from "./home.module.scss"
import React from "react"
import Guy from "../images/guy.svg"
import Rect from "../images/Rectangle.png"

const Home = () => {

    return (
        <div className={homeStyles.home}>
            <div className={homeStyles.grid}>
                <div style={{ overflow: "hidden" }}>
                    <div style={{ zIndex: "1", position: "absolute", left: "50px", top: "25%", width: "40%" }}>
                        <h1>Hello my name is George Kandalaft</h1>
                        <h2>A Software Developer and a Designer</h2>
                        <button><h3>Learn More</h3></button>
                        {/* <div className={homeStyles.button}>Learn More</div> */}
                    </div>
                    <img src={Rect} alt="rectangular" style={{ position: "relative", top: "10px", right: "10px", zIndex: "0", height: "100%" }} />
                </div>
                <img alt="guy" src={Guy} />
            </div>
            <div className={homeStyles.rect}>

            </div>
        </div>
    )
}
export default Home