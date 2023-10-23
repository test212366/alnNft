import { Route } from 'react-router-dom'
import { CSSTransition } from "react-transition-group";

import { useState } from "react"

import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Auth from './components/Sign/Auth'
import Allworks from './components/Allworks/Allworks';


const App = () => {
	const [user, setUser] = useState(false)

	const publicRoutes = [
		{ path: '/home', Component: Home },
		{ path: '/auth', Component: Auth },
		{ path: '/allWorks', Component: Allworks }
	]
	const privateRoutes = [
		{ path: '/profile', Component: Profile }
	]
	return (
		<>
			{
				publicRoutes.map(({ path, Component }) => (
					<Route key={path} exact path={path}  >
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={300}
								classNames="page"
								unmountOnExit
							>
								<div className="page">
									<Component />
								</div>
							</CSSTransition>
						)}
					</Route>
				))
			}
			{user && privateRoutes.map(({ path, Component }) => (
				<Route key={path} exact path={path}  >
					{({ match }) => (
						<CSSTransition
							in={match != null}
							timeout={300}
							classNames="page"
							unmountOnExit
						>
							<div className="page">
								<Component />
							</div>
						</CSSTransition>
					)}
				</Route>
			))}

		</>

	)
}
export default App
