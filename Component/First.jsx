import { TextField } from "@mui/material"
import { Link } from "react-router-dom"

const First=()=>{
    return(
        <div className="first">
            <div className="ynote">
                <Link><TextField label="Write Your Note"  /></Link><br /><br />
            </div>
            <div className="icon">
                <ol>
                    <li>hi</li>
                    <li>helo</li>
                </ol>
            </div>
        </div>
    )
}

export default First