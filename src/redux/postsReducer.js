import { CREATE_POST } from "./types"

const initionalState = {
	posts: [
		{ postURL: 'https://t3.ftcdn.net/jpg/04/62/63/28/360_F_462632847_XXwzyva7hWEX0Z4xWS40jSmWmrrJPgrs.jpg', postName: 'Alex Banon' },
		{ postURL: 'https://i.pinimg.com/originals/d5/4a/d5/d54ad5dbf29bcaec0d16055ddec5f063.png', postName: 'Elen Adler' },
		{ postURL: 'https://w0.peakpx.com/wallpaper/97/417/HD-wallpaper-everlasting-arms-color-colorful-geoglyser-abstract-acrylic-beautiful-blue-fluid-holographic-iridescent-orange-pink-psychedelic-purple-rainbow-texture-trippy-vaporwave-waves-yellow.jpg', postName: 'Sherlock Homes' },
		{ postURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshTayHhqt3rGJ7QxpC06fq-W1zYC9aJ2oJTHxi_5wi9MKEsfR6J28OGmYJme_apU8XZs&usqp=CAU', postName: 'Dr. Watson' }
	]
}


export const postsReducer = (state = initionalState, action) => {
	switch (action.type) {
		case CREATE_POST:
			return { ...state, posts: state.posts.concat([action.payload]) }
		default: return state
	}
}