import React from 'react'
import TitleStyles from "./title.module.scss"

const Title = (props) => {
    return <div className={TitleStyles.title}>
        <h1>{props.name}</h1>
    </div>;

}
export default Title