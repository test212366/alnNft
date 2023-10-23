import Header from "../../Utils/Header/Header"
import c from './home.module.css'
import background from '../../assets/background.png'
import SliderWordks from "../../Utils/SliderWorks/SliderWorks"
import Slider from "react-slick"
import { connect } from 'react-redux'

import { createPost } from "../../redux/actions"


import item_slider from '../../assets/itemSlider.jpg'
import info from '../../assets/info.svg'
import Post from "./components/Post"
import { NavLink } from "react-router-dom"

const Home = ({ posts }) => {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 8000,
		verticalSwiping: true,
		vertical: true,
	}
	return (
		<div className="container">
			<Header />
			<img className={c.background} src={background} alt="back" />
			<section >
				<div className="description">
					<h1 className={c.title}>
						<span className={c.blue}>Discover</span>
						the worlds top
						designers & creative
					</h1>
					<p className={c.infoDesign}>The new UI design system powering the works best user experiences</p>

					<div className={c.buttons}>
						<button className={c.createAccaunt}>Create account</button>
						<button className={c.createUI}>Create UI</button>
					</div>

					<div className={c.slider}>
						<SliderWordks />
					</div>
					<div className={c.verticalSlider}>
						<Slider {...settings}>
							<div className={`${c.item__slider}`}>
								<img src={item_slider} className={c.imgItemSlideVert} width='400px' height='400px' alt="sliderImg" />

								<div className={c.border}>

								</div>
								<div className={c.item}>
									<p> <img width='20px' height='20px' className={c.info} src={info} alt="info" /> Alex Bram</p>
								</div>
								<div className={c.item2}>
									<div>

									</div>
									<p><img width='20px' height='20px' className={c.info} src={info} alt="info" />Joke Bram</p>
								</div>

							</div>
							<div className={`${c.item__slider}`}>
								<img src='https://t3.ftcdn.net/jpg/04/62/63/28/360_F_462632847_XXwzyva7hWEX0Z4xWS40jSmWmrrJPgrs.jpg' className={c.imgItemSlideVert} width='400px' height='400px' alt="sliderImg" />

								<div className={c.border}>

								</div>
								<div className={c.item}>
									<p> <img width='20px' height='20px' className={c.info} src={info} alt="info" /> Alex Bram</p>
								</div>
								<div className={c.item2}>
									<div>

									</div>
									<p><img width='20px' height='20px' className={c.info} src={info} alt="info" />Joke Bram</p>
								</div>

							</div>
							<div className={`${c.item__slider}`}>
								<img src='https://i.pinimg.com/originals/d5/4a/d5/d54ad5dbf29bcaec0d16055ddec5f063.png' className={c.imgItemSlideVert} width='400px' height='400px' alt="sliderImg" />

								<div className={c.border}>

								</div>
								<div className={c.item}>
									<p> <img width='20px' height='20px' className={c.info} src={info} alt="info" /> Alex Bram</p>
								</div>
								<div className={c.item2}>
									<div>

									</div>
									<p><img width='20px' height='20px' className={c.info} src={info} alt="info" />Joke Bram</p>
								</div>

							</div>

						</Slider>
					</div>
				</div>
			</section>
			<section className={c.intermediate}>
				<button className={`${c.createAccaunt} ${c.pd}`}>Graphis</button>
				<h3 className={c.trendingTitle}>Trending items</h3>
				<p className={c.backgroundTitle}>GRAPIHCS</p>

			</section>
			<section className={c.arrayFilters}>
				<div className={c.firstSort}>
					<p className={c.titleSortTrending}>Popular |||||</p>
					<button className={c.buttonSort}>something dote</button>
				</div>

				<ul className={c.sortButtonsArray}>
					<li><button className={`${c.buttonItemAr} ${c.active}`}>popular</button></li>
					<li><button className={c.buttonItemAr}>art</button></li>
					<li><button className={c.buttonItemAr}>Puctire</button></li>
					<li><button className={c.buttonItemAr}>Rows</button></li>
					<li><button className={c.buttonItemAr}>Confirm</button></li>
					<li><button className={c.buttonItemAr}>Ruda</button></li>
				</ul>
				<button className={c.likeButton}>like LIKE</button>
			</section>
			<section className={c.arrayITems}>
				{posts.posts.map((post, i) => <Post url={post.postURL} name={post.postName} key={i} />)}
				<NavLink to='/allWorks' className={c.seeMore}>Top Collection</NavLink>
			</section>
		</div>
	)
}
const mapStateToProps = state => {
	return state
}
const mapDispatchToProps = {
	createPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)