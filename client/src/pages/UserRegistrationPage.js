import {useEffect} from 'react'

const UserRegistrationPage = ({ loginScreenState, setLoginScreenState }) => {


    useEffect(() => {
        const resetLoginScreenState = () => {
          setLoginScreenState(false)  
        }
        resetLoginScreenState()
      })

    return (
        <div>you have reached the unfinished user registration page!</div>
    )
}

export default UserRegistrationPage