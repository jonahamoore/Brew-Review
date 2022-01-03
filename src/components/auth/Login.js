import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { grommet, Box, Card, CardHeader, Heading, CardBody, Button, CardFooter } from "grommet";






export const Login = (props) => {
    const email = useRef()
    const password = useRef()
    const existDialog = useRef()
    const navigate = useNavigate() //now needs to be navigate and useNaviagte()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("brew_User", exists.id)
                    props.setLoggedin(true)
                    navigate("/coffee") // change to navigate("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <Box align="center" justify="center" direction="column" fill="horizontal" flex pad="large" margin="large" >
            <Card align="center" justify="center">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <Box background="url(https://images.unsplash.com/photo-1525480122447-64809d765ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)" align="center" justify="center" pad="small" margin="medium" >
                    <Heading align="center" margin="xxsmall" textAlign="center" justify="center">Brew Review</Heading>
                    <h2 align="center" className="pleaseSignIn">Please sign in</h2>
                    
                    <fieldset className="emailAddressBox">
                        <label htmlFor="inputEmail"> <h3 className="email">Email address</h3> </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset className="SignIn">
                        <Button className="signInButton" color="#481D24"  label="Sign In" type="submit" align="center" justify="center"/>
                    </fieldset>
                    </Box>
                </form>
            </section>
            
            <CardFooter textAlign="center">
            <section className="link--register">
                <Link to="/register"><h3>Not a member yet?</h3></Link>
            </section>
            </CardFooter>
            </Card>
            </Box>
        </main>
    )
}
