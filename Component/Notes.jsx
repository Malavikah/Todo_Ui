import { TextField } from "@mui/material"
import { Link } from "react-router-dom"
import First from "./First"
import { useState,useEffect } from "react"
import axios from "axios"
import Weekly from "./Weekly"
import Navbar from "./NavBar"
import ViewWeekly from "./ViewWeekly"


const Notes =() => {
    return(
     <div>
        <div className="homepage">
           
         <Navbar/><br/><br/><br/><br/>
         <First/>
      
            
            
            <section className="note">
                <div className="head">
                     <h1>Your Notes</h1>  
                    <ol>
                        <li><Link>All</Link></li>
                        <li><Link>Shared Notes</Link></li>
                       <li><Link>Pin Notes</Link></li>
                        <li><Link>Favourite Notes</Link></li>
                    </ol>
                </div>

        {/* {
        content.map((x) =>{
            console.log(x.description)
        return( */}
          
        {/* )
        })} 
         {
            
            
            content.map((e)=>{
                console.log(e.description);
                return(
                    <div>

                    </div>
                )
            })
        } */}
            <ViewWeekly />
            </section>
        </div>
           {/* <ViewWeekly/> */}
        </div>
    )        
}
export default Notes