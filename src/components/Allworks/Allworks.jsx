import Header from '../../Utils/Header/Header'
import c from './allworks.module.css'
import ItemColl from './components/ItemColl'
import { connect } from 'react-redux'
import item from '../../assets/itemSlider.jpg'
import Post from "../Home/components/Post"
const Allworks = ({ posts }) => {
	return (
		<div className="container">
			<Header />
			<section className={c.intermediate}>
				<button className={`${c.createAccaunt} ${c.pd}`}>Graphis</button>
				<h3 className={c.trendingTitle}>Top Collection</h3>
				<p className={c.backgroundTitle}>GRAPIHCS</p>

			</section>
			<section className={c.arrayFilters}>
				<div className={c.firstSort}>
					<p className={c.titleSortTrending}>Popular |||||</p>
				</div>

				<ul className={c.sortButtonsArray}>
					<li><button className={`${c.buttonItemAr} ${c.active}`}>popular</button></li>
					<li><button className={c.buttonItemAr}>art</button></li>
					<li><button className={c.buttonItemAr}>Puctire</button></li>
					<li><button className={c.buttonItemAr}>Rows</button></li>
					<li><button className={c.buttonItemAr}>Confirm</button></li>

				</ul>
				<button className={c.likeButton}>like LIKE</button>
			</section>
			<section className={c.collection}>
				<ItemColl />
				<ItemColl />
				<ItemColl />
				<ItemColl />
			</section>
			<section className={c.join}>
				<img src={item} alt="JoinAlt" className={c.joinImg} />


				<div className={c.wrapper}>

				</div>
				<div className={c.descJoin}>
					<h3>Join ALN NFT</h3>
					<p>and Sell Your Artwork</p>
					<button className={c.createAccaunt}>Create account</button>
				</div>

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
			</section>
		</div>

	)
}
const mapStateToProps = state => {
	return state
}
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Allworks) 