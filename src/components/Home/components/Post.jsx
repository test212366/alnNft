import c from '../home.module.css'

const Post = ({ name, url }) => {
	return (
		<div className={c.itemArrayCol}>
			<img src={url} width='260px' height='170px' className={c.arrayImg} alt="popular" />

			<p className={c.userNameCreated}>{name}</p>
			<button className={c.likeButtonItem}>like</button>
			<div className="desc">
				<div className={c.userDesc}>
					<img width='45px' height='45px' src="https://i.pinimg.com/236x/74/90/ea/7490ea7def5128da8c1d534b983f28ef.jpg" className={c.userPhotoItemAr} alt="photoUser" />
					<p className={c.userNameAr}>{name}</p>
				</div>

				<p className={c.pAr}>current tid</p>
				<span className={`${c.pAr} ${c.ETH}`}>0.4 ETH</span>
				<button className={c.buttonPlace}>Place to bid</button>
			</div>

		</div>
	)
}
export default Post