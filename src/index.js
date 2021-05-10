import {createStore} from 'redux';

const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			return state +1;
		
		case 'DEC':
			return state -1;

		case 'RES':
			return 0;

		default: 
			return state;
	}
}

const incAC = () => ({type: 'INC'});
const decAC = () => ({type: 'DEC'});
const resAC = () => ({type: 'RES'})

const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
	store.dispatch(incAC());
});

document.getElementById('dec').addEventListener('click', () => {
	store.dispatch(decAC());
});

document.getElementById('res').addEventListener('click', () => {
	store.dispatch(resAC());
});

const updateStore = () => {
	document.getElementById('counter').textContent = store.getState();
}

store.subscribe(updateStore);

