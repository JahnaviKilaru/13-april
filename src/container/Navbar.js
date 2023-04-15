import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div style={{backgroundColor:"black"}} className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Conact</Link>
            <Link to="/signup">Signup</Link>
        </div>
    )
}
export default Navbar