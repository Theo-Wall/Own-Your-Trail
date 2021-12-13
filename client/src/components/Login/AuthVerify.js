

const AuthVerify = ({ token, setToken, isLoggedIn, setIsLoggedIn, setUserInfo }) => {
    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]))
        } catch (e) {
            return null
        }
    }
    console.log("AuthVerify has been called")
    if (isLoggedIn) {
        const decodedJwt = parseJwt (token)
        if (decodedJwt.exp*1000 < Date.now()) {
            console.log('token has expired')
            setIsLoggedIn(false)
            setToken(null)
            setUserInfo({})
            alert('Your token has expired, please login again.')
        }
    }

    return (
        <span></span>
    )
}

export default AuthVerify