import Header from "../../Utils/Header/Header"
import c from './auth.module.css'
import background from '../../assets/background.png'
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux'


import google from '../../assets/google.svg'
import user from '../../assets/user.svg'
import { useState } from "react";

const Auth = (props) => {
	const [login, setLogin] = useState(false)
	const [register, setRegister] = useState(false)
	///1094366230693-o4p7m2jepb1neslgl7593k7dqea96s4s.apps.googleusercontent.com
	const onSuccsessLogin = req => {
		console.log(req)
	}
	const onFailure = req => {
		console.log(req)
	}
	return (
		<div className="container">
			<Header />
			<img className={c.background} src={background} alt="back" />
			<div className={c.authen}>
				<GoogleLogin
					clientId="1094366230693-o4p7m2jepb1neslgl7593k7dqea96s4s.apps.googleusercontent.com"
					buttonText="Login"
					onSuccess={onSuccsessLogin}
					onFailure={onFailure}
					render={renderProps => (
						<button onClick={renderProps.onClick} disabled={renderProps.disabled} className={c.loginGoogle}> <img src={google} className={c.googleIMG} width='20px' height='20px' alt="google" /> Login in google</button>
					)}
					cookiePolicy={'single_host_origin'}
				/>
				<div className={c.wrapperOR}>
					<hr />
					<p className={c.or}> or </p>
					<hr />
				</div>

				<button className={c.regist}> <img src={user} className={c.userRegister} alt="userRegistter" width='20px' height='20px' /> Registration</button>
				<button className={c.login}>Login</button>
			</div>

		</div>

	)
}
export default connect(null, null)(Auth) 