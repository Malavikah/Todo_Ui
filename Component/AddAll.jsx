import axios from "axios"
import { useState } from "react"

const AddAll = () => {

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
        setFile(a.target.value)
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

    const imagdata={title,file,date}
    const ok=()=>{
        axios.post("http://localhost:8080/images",imagdata)
        .then((resp)=>{
            alert("done")
            console.log(resp);
        })
        .catch(()=>{
            console.log("error");
        })
    }

    let adddata={title,description,date}
    let add=()=>{
        axios.post("http://localhost:8080/address",adddata)
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
        axios.post("http://localhost:8080/benefits",benedata)
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
        <form>
            Title: <input type="text" value={title} onChange={handleTitle} className="form-control"/>
            Description: <input type="text" value={description} onChange={handleDesc} className="form-control"/>
            Date: <input type="date" value={date} onChange={handleDate} className="form-control"/>
            Image: <input type="file" name="file" value={file} onChange={handleFile} />

            <button onClick={submit}>weekly</button>
            <button onClick={save}>birthday</button>
            <button onClick={done}>essay</button>
            <button onClick={success}>lecture</button>
            <button onClick={add}>address</button>
            <button onClick={okay}>benefits</button>
            <button onClick={ok}>images</button>
            <button onClick={saved}>quick</button>
            <button onClick={added}>noteplus</button>
            
        </form>
    </div>

    )
}

export default AddAll