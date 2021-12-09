import { Link } from "react-router-dom"
import { useState } from "react";

const LoginDetails = ({setLoginScreenState}) => {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const onInput = (event, setter) => {
      let newValue = event.target.value;
      setter(newValue);
    };

    const onSubmit = () => {
      console.log("made it into the onSubmit function");
      console.log("User Data", userEmail, userPassword)
      setLoginScreenState(false);
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
              value={userPassword}
              onChange={(event) => onInput(event, setUserPassword)}
              id="userName"
              type="text"
              placeholder="Your password"
              required
            ></input>
            <Link to="/userRegistrationPage">I need to register for a user account</Link>
            <div>
              <button onClick = {() => setLoginScreenState(false)} className='button'>Close</button>
              <button onClick = {onSubmit} className='button'>Submit</button>
            </div>
        </div>
    )
}

export default LoginDetails