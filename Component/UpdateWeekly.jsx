import { useEffect, useState } from "react"
import {  useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import moment from "moment/moment";

const UpdateWeekly=()=>{


    let [title , setTitle]=useState("");
    let [description,setDescription]=useState("");
    let [date , setDate]=useState("");

    let handleTitle = (e) =>{ setTitle(e.target.value) } 
    let handleDesc = (e) =>{ setDescription(e.target.value) } 
    let handleDate = (e) =>{ setDate(e.target.value) } 

    let navigate = useNavigate();
    let obj = useParams();

    const updateForm = ({ data }) => {
        setTitle(data.title)
        setDescription(data.description);
        let dateArray = data.date;
        if (dateArray) {
            let newDate = new Date(`${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`);
            setDate(moment(newDate).format('YYYY-MM-DD'));
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/weekly/${obj._id}`)
        .then((response) => {
            updateForm(response.data);
        })
        .catch(() => {
            console.log("Error45");
        })
    }, [obj._id])

    let handleSubmit = (e) => {
        e.preventDefault();
        let weekly = {title : title, description : description , date : date};
        axios.put(`http://localhost:8080/weekly/${obj._id}`,weekly)
        .then(() => {
            console.log("Updated")
            navigate(`/`)
        })
        .catch(() => {
            console.log("error")
        })  
    }
    return(
        
     <div>
        <form onSubmit={handleSubmit}>
            Title: <input type="text" value={title} onChange={handleTitle}  />
            Description: <input type="text" value={description} onChange={handleDesc} />
            Date: <input type="date" value={date} onChange={handleDate} />
            <input type="submit" value="Update"/>
            
        </form>
    </div>

    )
}

export default UpdateWeekly