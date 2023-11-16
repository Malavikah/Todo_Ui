import { useEffect, useState } from "react"
import WeeklyServices from "../services/WeeklyServices"

const Weekly = () => {

    let [content, setContent] = useState([])

    useEffect(() => {

        WeeklyServices.getAllWeekly
        .then((response) => {

            // setContent(JSON.stringify(response.data.data))
            // console.log("done")
            // alert(JSON.stringify(response.data.data));

            setContent(response.data)
            console.log(response.data);
        })
        .catch (error =>{
            console.log(error);
        })
    },[])

    return(
        <div>
            {
            content.map((x) =>
                <div className="box a" key={x.id}>
                    <h3>{x.title}</h3><br/>
                    <p>{x.description}</p> 
                    <p>{x.date}</p>
                </div>
            )
            }
        </div>
    )
}

export default Weekly