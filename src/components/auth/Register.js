import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { grommet, Box, Card, Heading, Button } from "grommet"

export const Register = (props) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const verifyPassword = useRef()
    const conflictDialog = useRef()
    const navigate = useNavigate()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            name: `${firstName.current.value} ${lastName.current.value}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("brew_User", createdUser.id)
                                props.setLoggedin(true)
                                navigate("/coffee")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <div className="registerForm">
            <Card width="large">
            <form className="form--login" onSubmit={handleRegister}>
                <Heading className="brewReviewRegisterHeader">Please Register for Brew Review</Heading>
                <Box>
                <fieldset>
                    <label htmlFor="firstName"> <h3>First Name</h3> </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> <h3>Last Name</h3> </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> <h3>Email address</h3> </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <Button color="#704E33" margin={"small"} alignSelf="center" justify="center" type="submit"> Sign in </Button>
                </fieldset>
                </Box>
            </form>
            </Card>
            </div>
        </main>
    )
}
