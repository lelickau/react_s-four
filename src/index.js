import {createStore} from 'redux';

//const initialState = 0;

const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			return state +1;
		
		case 'DEC':
			return state -1;

		case 'RND':
			return state + action.value;

		default: 
			return state;
	}
}
//action creator incAC
const incAC = () => ({type: 'INC'});
const decAC = () => ({type: 'DEC'});
const rndAC = (value) => ({type: 'RND', value})
// const incAC = () => {
// 	return {
// 		type: 'INC'
// 	}
// }

const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
	store.dispatch(incAC());
});

document.getElementById('dec').addEventListener('click', () => {
	store.dispatch(decAC());
});

document.getElementById('rnd').addEventListener('click', () => {
	const value = Math.floor(Math.random() * 10);
	store.dispatch(rndAC(value));
});

const updateStore = () => {
	document.getElementById('counter').textContent = store.getState();
}

store.subscribe(updateStore);

// store.subscribe(() => {
// 	console.log(store.getState());
// })

// store.dispatch({type: 'INC'});

// store.dispatch({type: 'INC'});

// store.dispatch({type: 'INC'});

