import React from "react"

export default function Journey(){
    return(
        <div className="Journey">
            <div className="Journey--image-container">
            <img className="Journey--image" src="./images/japonsko.jpg" alt="photo from vaccation"></img>
            </div>
            <div className="Journey--text-container">
            <div className="Journey--text-country-container">
            <p className="Journey--country">Zeme</p>
            <a className="Journey--map" href="https://www.google.cz/maps/place/Fud%C5%BEi/">View on Google Maps</a>
            </div>
            <h1 className="Journey--title">Nazev</h1>
            <h3 className="Journey--date">Datum</h3>
            <p className="Journey--description"> popisekpopisekpopisekpopisekpopisek popisekpopisek popisekpopisek popisekpopisek popisek </p>
            </div>
        </div>
    )
}