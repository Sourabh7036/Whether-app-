import { useState } from "react"
import Infodata from "./infobox.jsx"
import Search from "./Searchbar.jsx"

export default function Whetherapp(){

    const[Whetherdata , setWhetherdata] = useState(
        {
    
            lat : 28.6517178,
            lon : 77.2219388,
            name : "Delhi"
        }

    )
    let updateinfo = (result) =>{
        setWhetherdata(result);
    }

    return (
        <div className="whetherapp">
            <h1>Whether APP</h1>
            <Search updateinfo = {updateinfo}/>
            <Infodata info = {Whetherdata}/>


        </div>
    )
}