import LoginDetails from './LoginDetails'
import RegistrationDetails from './RegistrationDetails'
import Modal from '../modal/Modal'

const LoginScreen = ({loginScreenState, setLoginScreenState, registrationScreenState, setRegistrationScreenState, setToken, setIsLoggedIn}) => {
    return (
        <Modal
            title={loginScreenState ? "Login Screen" : "Registration Screen"}
            show={loginScreenState || registrationScreenState}
            onClose={() => {loginScreenState ? setLoginScreenState(false) : setRegistrationScreenState(false)}}
        >
        {loginScreenState && <LoginDetails 
            setLoginScreenState={setLoginScreenState}
            setRegistrationScreenState={setRegistrationScreenState}
            setToken={setToken}
            setIsLoggedIn={setIsLoggedIn}
        />}
        {registrationScreenState && <RegistrationDetails
            setRegistrationScreenState={setRegistrationScreenState}
            setToken={setToken}
            setIsLoggedIn={setIsLoggedIn}
        />}
      </Modal>
    )
}

export default LoginScreen