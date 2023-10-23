import { NavLink } from 'react-router-dom'
import c from './header.module.css'

import bell from '../../assets/bell.svg'
import user from '../../assets/user.svg'


const Header = () => {



	return (
		<header className={c.header} >

			<nav className={c.nav}>
				<ul className={c.navig}>
					<li className={c.item__nav}><span className={c.logo}>ALN NFT</span></li>
					<li className={c.item__nav}><NavLink to='/marketPlace' className={c.link__reset} activeClassName={c.active} >Market Place</NavLink> </li>
					<li className={c.item__nav}><NavLink to='/allWorks' className={c.link__reset} activeClassName={c.active} >All Works</NavLink> </li>
					<li className={c.item__nav}><NavLink to='/marketPlace' className={c.link__reset} activeClassName={c.active} >Market Place</NavLink> </li>
					<li ><NavLink to='/home' className={c.link__reset} activeClassName={c.active} >Home & works</NavLink> </li>
				</ul>
				<ul className={`${c.navig} ${c.center}`}>
					<li ><img width='15px' height='15px' className={c.img__bell} src={bell} alt="info" /></li>
					<li className={c.mb} ><NavLink to='/auth' className={`${c.sign}`}  > <img src={user} className={c.user} height='20px' width='20px' alt="userPh" /> Sign up</NavLink> </li>
				</ul>
			</nav>

		</header>
	)
}
export default Header