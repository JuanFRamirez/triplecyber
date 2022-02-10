import { Link, useNavigate } from "react-router-dom";
const Menu=()=>{
return(
    <div className="navbar">
        <ul>
            <Link to={"/"}>Main Page</Link>
            <Link to={"/fibonacci"}>Fibonacci</Link>
            <Link to={"/random"}>Random</Link>
            <Link to={"/bills"}>Bills</Link>
            <Link to={"/movies"}>Movies API</Link>
        </ul>
    </div>
)
}
export default Menu