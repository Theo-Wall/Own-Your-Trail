import './LoginDetails.css'
import { Link } from "react-router-dom"
import { useState } from "react";

const LoginDetails = ({setLoginScreenState, setToken, setIsLoggedIn}) => {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [wrongCredentials, setWrongCredentials] = useState(false)
    const [authenticationMessage, setAuthenticationMessage] = useState("")

    const onInput = (event, setter) => {
      let newValue = event.target.value;
      setter(newValue);
    };

    const LoginButtons = () => {
      return (
        <div>
          <Link to="/userRegistrationPage">I need to register for a user account</Link>
            <div>
              <button className = "modal-button" onClick = {() => setLoginScreenState(false)} >Close</button>
              <button className = "modal-button" onClick = {onSubmit} >Login</button>
            </div>
        </div>
      )
    }

    const WrongCredentialsButton = () => {
      return (
        <div>
          {`${authenticationMessage}`}
          <button className = "modal-button" onClick = {() => setLoginScreenState(false)} >Close</button>
        </div>
      )
    }

    const onSubmit = async () => {
      const userLoginDetails = {email: userEmail, password: userPassword}

      const fetchedResult = await fetch('/api/login', {
        method: "POST",
        body: JSON.stringify(userLoginDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const userTokenAndId = await fetchedResult.json()

      console.log("User Data returned from endpoint",userTokenAndId)
      
      if (!userTokenAndId.userToken) {
        setWrongCredentials(true)
        setAuthenticationMessage(userTokenAndId.message)
        return
      }
      setToken(userTokenAndId.userToken)
      setIsLoggedIn(true)
      setLoginScreenState(false);
      console.log("made it past the setters, shouldn't have")
    };  

    return(
        <div className="user-name">
            <label htmlFor="userName">Email:</label>
            <input
              value={userEmail}
              onChange={(event) => onInput(event, setUserEmail)}
              id="userName"
              type="text"
              placeholder="Your email"
              required
            ></input>
            <label htmlFor="userName">Password:</label>
            <input
              className="user-name"
              value={userPassword}
              onChange={(event) => onInput(event, setUserPassword)}
              id="userName"
              type="password"
              placeholder="Your password"
              required
            ></input>
            <div className = "modal-footer">
              {(wrongCredentials ? WrongCredentialsButton() : LoginButtons())}
            </div>
        </div>
    )
}

export default LoginDetails