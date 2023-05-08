import React from "react";

const Card = (props) => {
    console.log(props)
    return (
        <div className="Card--container">
            <img src={props.trip.imageUrl} alt={props.trip.title} />
            <div className="Card--details-container">
                <h3><i class="fa-solid fa-location-dot"></i> {props.trip.location}</h3>
                <a href={props.trip.googleMapsUrl}>View on Google Maps</a>
                <h2>{props.trip.title}</h2>
                <h4>{props.trip.startDate}</h4> <span>-</span> <h4>{props.trip.endDate}</h4>
                <p>{props.trip.description}</p>
            </div>
        </div>
    )
}

export default Card;