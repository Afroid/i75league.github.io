import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='navBar'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/careers">Careers</Link>
        </div>
    )
}

export default Navbar;