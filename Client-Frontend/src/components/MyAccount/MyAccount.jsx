import React from 'react'
import SignUp from '../SignUp/SignUp'
import Login from '../Login/Login'
import './MyAccount.css'

const MyAccount = () => {
    return (
        <>
            <div className="container">
                <Login />
                <SignUp />
            </div>
        </>
    )
}

export default MyAccount