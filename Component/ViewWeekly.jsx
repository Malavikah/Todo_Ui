import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const ViewWeekly=()=>{
    let [state,setState]=useState([]);
 
    useEffect(()=>{

     axios.get("http://localhost:8080/weekly").then((response)=>{
        console.log("hiii23")
        setState(response.data)
        sessionStorage.setItem( "todo",JSON.stringify(response.data))
        
     }).catch((errror)=>{
        console.log(errror);
     })
    },[]);
 
    console.log(state);
    let navigate =useNavigate();
 

    let handleView = (id) =>{
        navigate ('{pathname:'/'}');
       }
    let handleUpdate = (id) =>{
     navigate(`/updateweekly/${id}`);
    }
    let handleDelete = (id) =>{
     navigate ('/deleteweekly',{state : {id}});
    }
     return(

        <>
            <div className="section">
                {state.map(notes => (
                    <div className="box a">
                        <div>
                            <h1>{notes.title}</h1>
                        </div><br/>
                        <h3>{notes.description}</h3><br/>
                        <span>{moment(notes.date).format('DD MMM YYYY')}</span>
                    </div>
                ))}
            </div>
                <button className="btn btn-primary" onClick={()=>{handleView(x.id)}}>View</button>
                <button className="btn btn-warning" onClick={()=>{handleUpdate(x.id)}}>Update</button>
                <button className="btn btn-danger" onClick={()=>{handleDelete(x.id)}}>Delete</button>

        </>
    );
 }
 export default ViewWeekly