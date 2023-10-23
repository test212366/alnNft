import item_slider from '../../assets/itemSlider.jpg'
import Slider from "react-slick";
import c from '../../components/Home/home.module.css'

const SliderWordks = () => {
	const settings = {
		Infinite: true,
		speed: 900,
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 6000,
		slidesToScroll: 3,
	}
	return (
		<Slider {...settings}>
			<div className={`${c.item__slider} ${c.mt}`}>
				<img src={item_slider} className={c.imgItemSlide} width='200px' height='130px' alt="sliderImg" />
				<p className={c.userCreated}>Jock Donals</p>
			</div>
			<div className={`${c.item__slider} ${c.mt2}`}>
				<img src='https://t3.ftcdn.net/jpg/04/62/63/28/360_F_462632847_XXwzyva7hWEX0Z4xWS40jSmWmrrJPgrs.jpg' className={c.imgItemSlide} width='200px' height='130px' alt="sliderImg" />
				<p className={c.userCreated}>Alex Banon</p>
			</div>
			<div className={c.item__slider}>
				<img src='https://i.pinimg.com/originals/d5/4a/d5/d54ad5dbf29bcaec0d16055ddec5f063.png' className={c.imgItemSlide} width='200px' height='130px' alt="sliderImg" />
				<p className={c.userCreated}>Elen Adler</p>
			</div>

			<div className={`${c.item__slider} ${c.mt}`}>
				<img src='https://w0.peakpx.com/wallpaper/97/417/HD-wallpaper-everlasting-arms-color-colorful-geoglyser-abstract-acrylic-beautiful-blue-fluid-holographic-iridescent-orange-pink-psychedelic-purple-rainbow-texture-trippy-vaporwave-waves-yellow.jpg' className={c.imgItemSlide} width='200px' height='130px' alt="sliderImg" />
				<p className={c.userCreated}>Sherlock Homes</p>
			</div>
			<div className={`${c.item__slider} ${c.mt2}`}>
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshTayHhqt3rGJ7QxpC06fq-W1zYC9aJ2oJTHxi_5wi9MKEsfR6J28OGmYJme_apU8XZs&usqp=CAU' className={c.imgItemSlide} width='200px' height='130px' alt="sliderImg" />
				<p className={c.userCreated}>Dr. Watson</p>
			</div>
			<div className={`${c.item__slider} ${c.mt}`}>
				<img src={item_slider} className={c.imgItemSlide} width='200px' height='130px' alt="sliderImg" />
				<p className={c.userCreated}>Jock Donals</p>
			</div>
			<div className={`${c.item__slider} ${c.mt2}`}>
				<img src='https://t3.ftcdn.net/jpg/04/62/63/28/360_F_462632847_XXwzyva7hWEX0Z4xWS40jSmWmrrJPgrs.jpg' className={c.imgItemSlide} width='200px' height='130px' alt="sliderImg" />
				<p className={c.userCreated}>Alex Banon</p>
			</div>
			<div className={c.item__slider}>
				<img src='https://i.pinimg.com/originals/d5/4a/d5/d54ad5dbf29bcaec0d16055ddec5f063.png' className={c.imgItemSlide} width='200px' height='130px' alt="sliderImg" />
				<p className={c.userCreated}>Elen Adler</p>
			</div>

			<div className={`${c.item__slider} ${c.mt2}`}>
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshTayHhqt3rGJ7QxpC06fq-W1zYC9aJ2oJTHxi_5wi9MKEsfR6J28OGmYJme_apU8XZs&usqp=CAU' className={c.imgItemSlide} width='200px' height='130px' alt="sliderImg" />
				<p className={c.userCreated}>Dr. Watson</p>
			</div>
		</Slider>
	)
}
export default SliderWordks