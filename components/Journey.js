import React from "react"

export default function Journey(props){

    return(
        <div className="Journey">
            <div className="Journey--image-container">
            <img className="Journey--image" src={props.item.imageUrl} alt="photo from vaccation"></img>
            </div>
            <div className="Journey--text-container">
            <div className="Journey--text-country-container">
            <p className="Journey--country">{props.item.location}</p>
            <a className="Journey--map" href={props.item.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className="Journey--title">{props.item.title}</h1>
            <h3 className="Journey--date">{props.item.startDate}</h3>
            <p className="Journey--description">{props.item.description}</p>
            </div>
        </div>
    )
}