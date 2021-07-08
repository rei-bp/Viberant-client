import { Link } from 'react-router-dom'

const Navbar = (props) => {
    // if the user is logged in
    const loggedIn = (
        <>
            {/* If the user is logged in */}
            <Link to="/profile">
                Profile
            </Link>

            <Link to="/">
                <span onClick={props.handleLogout}>Logout</span>
            </Link>
        </>
    )

    // if the user is logged out
    const loggedOut = (
        <>
            {/* If the user is logged out */}
            <Link to="/login">
                Login
            </Link>

            <Link to="/register">
                Register
            </Link>
        </>
    )

    return (
        <nav>
            <Link to="/">
                Home
            </Link>

            {props.currentUser ? loggedIn : loggedOut}
        </nav>
    )
}

export default Navbar