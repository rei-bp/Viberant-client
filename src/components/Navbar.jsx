import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav>
            <Link to="/">
                Home
            </Link>

            {/* If the user is logged in */}
            <Link to="/profile">
                Profile
            </Link>

            <Link to="/">
                <span onClick={props.handleLogout}>Logout</span>
            </Link>

            {/* If the user is logged out */}
            <Link to="/login">
                Login
            </Link>

            <Link to="/register">
                Register
            </Link>

        </nav>
    )
}

export default Navbar