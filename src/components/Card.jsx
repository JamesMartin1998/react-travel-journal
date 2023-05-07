import React from "react";

const Card = (props) => {
    console.log(props)
    return (
        <div className="Card--container">
            <h2>{props.trip.title}</h2>
        </div>
    )
}

export default Card;