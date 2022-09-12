import GoogleIcon from '../../assets/Google_G.svg'
import Image from 'next/image'

const LoginWindow = ({ handleLogin }) => {
	return (
		<div className='login-window'>
			<button className='login-google-button' type='button' onClick={handleLogin}>
				<Image src={GoogleIcon} alt='Google G'/>
				<span>Login With Google</span>
			</button>
		</div>
	)   
}

export default LoginWindow;