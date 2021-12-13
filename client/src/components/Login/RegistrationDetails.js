import { useState } from "react";

const RegistrationDetails = ({setRegistrationScreenState, setToken, setIsLoggedIn}) => {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [wrongRegistrationDetails, setWrongRegistrationDetails] = useState(false)
    const [registrationMessage, setRegistrationMessage] = useState("")

    const onInput = (event, setter) => {
      let newValue = event.target.value;
      setter(newValue);
    };

    const RegistrationButtons = () => {
      return (
        <div>
          {/* change next line to go back to login modal */}
          {/* <Link to="/userRegistrationPage">I need to register for a user account</Link> */}
            <div>
              <button className = "modal-button" onClick = {() => setRegistrationScreenState(false)} >Close</button>
              <button className = "modal-button" onClick = {onSubmit} >Register</button>
            </div>
        </div>
      )
    }

    const WrongRegistrationDetailsButton = () => {
      return (
        <div>
          {`${registrationMessage}`}
          <button className = "modal-button" onClick = {() => setRegistrationScreenState(false)} >Close</button>
        </div>
      )
    }

    const onSubmit = async () => {
      const userRegistrationDetails = {user_name: userName, email: userEmail, password: userPassword}

      const fetchedResult = await fetch('/api/createUser', {
        method: "POST",
        body: JSON.stringify(userRegistrationDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const userTokenAndId = await fetchedResult.json()

      console.log("User Data returned from endpoint",userTokenAndId)
      
      if (!userTokenAndId.userToken) {
        setWrongRegistrationDetails(true)
        setRegistrationMessage(userTokenAndId.message)
        return
      }
      setToken(userTokenAndId.userToken)
      setIsLoggedIn(true)
      setRegistrationScreenState(false);
    };  

    return(
        <div className="user-name">
            <label htmlFor="userName">User Name:</label>
            <input
              value={userName}
              onChange={(event) => onInput(event, setUserName)}
              id="userName"
              type="text"
              placeholder="Your Own Your Trail user name"
              required
            ></input>
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
              {(wrongRegistrationDetails ? WrongRegistrationDetailsButton() : RegistrationButtons())}
            </div>
        </div>
    )
}

export default RegistrationDetails