import React from "react"
import Navbar from "./components/Navbar"
import Journey from "./components/Journey"
import data from "./data.js"

export default function App(){

    const myData = data.map(item => {
        return(
        <Journey 
        item={item}
        />
        )  
    })

    return(
        <div>
        <Navbar />
        {myData}
        </div>
        
    )
}