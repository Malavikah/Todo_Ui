import { FaBars,  FaEnvelopeSquare, FaRegBell } from 'react-icons/fa';

const Navbar = () => {
    return(
        <div className="nav">
            <div className="logo">
                <div className="ic"><FaBars className="f" /></div>
                <div className="ic"><img className="i" src="Tologo.png"/></div>    
            </div>

            <div className="menu">
                <div className="id"><FaEnvelopeSquare className="f" /></div>
                <div className="id"><FaRegBell className="f" /></div>  
                <div className="id"><img className="m" src="boy.jpg"/></div>   
            </div>
        </div>
    )
}

export default Navbar