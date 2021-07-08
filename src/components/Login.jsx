import { useState } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Redirect } from 'react-router'
import Profile from './Profile'

const Login = (props) => {
    // state for the controlled form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // state for flash messages from the server
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            console.log('do axios call')
            // post to the backend with axios
            const requestBody = {
                email: email,
                password: password
            }

            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`, requestBody)
            
            console.log(response)
            // destrcuture the response
            const { token } = response.data
            
            // save the response to localstorage
            localStorage.setItem('jwtToken', token)

            // decode the jwt token before we put it in state
            const decoded = jwt.decode(token)

            // set the user in App.js' state
            props.setCurrentUser(decoded)

        } catch (error) {
            if(error.response.status == 400) {
                setMessage(error.response.data.msg)
            } else {
                console.log(error)
            }
        }
    }

    if(props.currentUser) return <Redirect to='/profile' component={ Profile } currentUser={ props.currentUser } />

    return (
        <div>
            <h3>Login To Your Account:</h3>

            <p>{message}</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor={'email-input'}>Email:</label>
                <input
                    id='email-input'
                    type='email'
                    placeholder='user@domain.com'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />

                <label htmlFor={'password-input'}>Password:</label>
                <input
                    id='password-input'
                    type='password'
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />

                <input
                    type='submit'
                    value='Login'
                />
            </form>
        </div>
    )
}

export default Login