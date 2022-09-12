import LoginWindow from './LoginWindow'

const LoginPage = ({auth, error, lastLocation, handleLogin}) => {
    // Check if users is authenticated, if not redirect to previous location or home
    if (!isEmpty(auth)) {
      console.log('not authorized')
    }

    return (
        <div className="login">
            <LoginWindow handleLogin={handleLogin}/>
        </div>
    )   
}

export default LoginPage