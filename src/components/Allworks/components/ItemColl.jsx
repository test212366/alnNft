import c from '../allworks.module.css'
const ItemColl = () => {
	return (
		<div className={c.itemCollection}>
			<div className={c.images}>
				<div className="bg">
					<img src="http://fluidart.vse32.ru/uploads/posts/2020-05/1589386325_20200229_200309-1.jpg" width='140px' height='300px' className={c.bg} alt="bigCollection" />
				</div>
				<div className={c.sm}>
					<img src="https://i.pinimg.com/originals/29/ab/25/29ab2538f1c5e0bda99fa8a32533d671.jpg" width='140px' height='145px' alt="smallItemCol" className={c.smItem} />

					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwsASRj-nzLsOOY_0g0g-CIcksA2umS2YKYUIiJaEBfhdXrRV6THtOQ-IDb3gtVc72KM&usqp=CAU" width='140px' height='145px' alt="smallItemCol" className={`${c.smItem} ${c.mt}`} />
				</div>
			</div>
			<div className={c.desc}>
				<div className={c.info}>
					<p>The Powedes Forge</p>
					<p>STAR 9.5</p>
				</div>

				<div className={c.user}>
					<div className={c.desUser}>
						<img width='40px' className={c.userPh} height='40px' src="https://i.pinimg.com/originals/d1/15/bb/d115bbc62391709f14b4be704bd885df.jpg" alt="userPh" />
						<p>Jack Dowson</p>
					</div>

					<button className={c.buttonS}>Something</button>
				</div>
			</div>
		</div>
	)
}
export default ItemColl