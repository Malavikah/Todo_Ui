
import { TextField } from "@mui/material"
import { useState } from "react"
import axios from "axios"

const Addnew = () => {
    let [title , settitle]=useState("")
    let [description,setdescription]=useState("")
    let [date , setdate]=useState("")
    const [file, setFile] = useState("")

    let handleTitle=(a)=>{
        settitle(a.target.value)
    }
    let handleDesc=(a)=>{
        setdescription(a.target.value)
    }
    let handleDate=(a)=>{
        setdate(a.target.value)
     }
    const handleFile=(a)=>{
        setFile(a.target.files[0])
     }

    let payload={title,description,date}
    let submit=()=>{
        axios.post("http://localhost:8080/weekly",payload)
        .then((resp)=>{
            alert("done")
            console.log(resp);
        })
        .catch(()=>{
            console.log("error");
        })
    }

    let data={title,description,date}
    let save=()=>{
        axios.post("http://localhost:8080/birthday",data)
        .then((resp)=>{
            alert("done")
            console.log(resp);
        })
        .catch(()=>{
            console.log("error");
        })
    }

    let essaydata={title,description,date}
    let done=()=>{
        axios.post("http://localhost:8080/essay",essaydata)
        .then((resp)=>{
            alert("done")
            console.log(resp);
        })
        .catch(()=>{
            console.log("error");
        })
    }

    let lectdata={title,description,date}
    let success=()=>{
        axios.post("http://localhost:8080/lecture",lectdata)
        .then((resp)=>{
            alert("done")
            console.log(resp);
        })
        .catch(()=>{
            console.log("error");
        })
    }

    const Upload = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('date', date);

        axios.post('http://localhost:8080/images', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });
    };
    // const images=()=>{
    //     axios.get(`http://localhost:8080/images/${1}`)
    //     .then((resp)=>{
    //         alert(resp.data.data)
    //         console.log(resp);
    //     })
    //     .catch(()=>{
    //         console.log("error");
    //     })
    // }

    let adddata={title,description,date}
    let add=()=>{
        axios.post("http://localhost:8080/addresses",adddata)
        .then((resp)=>{
            alert("done")
            console.log(resp);
        })
        .catch(()=>{
            console.log("error");
        })
    }

    let benedata={title,description,date}
    let okay=()=>{
        axios.post("http://localhost:8080/benefit",benedata)
        .then((resp)=>{
            alert("done")
            console.log(resp);
        })
        .catch(()=>{
            console.log("error");
        })
    }

    let quickdata={title,description,date}
    let added=()=>{
        axios.post("http://localhost:8080/quick",quickdata)
        .then((resp)=>{
            alert("done")
            console.log(resp);
        })
        .catch(()=>{
            console.log("error");
        })
    }

    let notedata={title,description,date}
    let saved=()=>{
        axios.post("http://localhost:8080/noteplus",notedata)
        .then((resp)=>{
            alert("done")
            console.log(resp);
        })
        .catch(()=>{
            console.log("error");
        })
    }

    return(
        <div>
            <h1>Title</h1>
            <TextField id="outlined-basic" label="Note" variant="outlined" value={title} onChange={handleTitle} /><br /><br />
            <textarea name="" id="" cols="30" placeholder="description" rows="10" value={description} onChange={handleDesc}></textarea>
            <TextField id="outlined-basic" type="date" value={date} onChange={handleDate} variant="outlined"  />
            <input type="file" onChange={handleFile} />

            <button onClick={submit}>weekly</button>
            <button onClick={save}>birthday</button>
            <button onClick={done}>essay</button>
            <button onClick={success}>lecture</button>
            <button onClick={add}>address</button>
            <button onClick={okay}>benefits</button>
            <button onClick={Upload}>images</button>
            <button onClick={saved}>quick</button>
            <button onClick={added}>noteplus</button>
            <button></button>
        </div>

    
    )
}
export default Addnew