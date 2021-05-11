import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import Counter from './counter';

const store = createStore(reducer);
const {dispatch} = store;
const {inc, dec, res, rnd} = bindActionCreators(actions, dispatch);

// document.getElementById('inc').addEventListener('click', inc);

// document.getElementById('dec').addEventListener('click', dec);

// document.getElementById('res').addEventListener('click', res);

// document.getElementById('rnd').addEventListener('click', () => {
// 	const value = Math.floor(Math.random() * 10);
// 	rnd(value)
// });

const updateStore = () => {
	ReactDOM.render(<Counter  
		counter={store.getState()}
		inc={inc}
		dec={dec}
		res={res}
		rnd={() => {
			const value = Math.floor(Math.random() * 10);
			rnd(value);
		}}
/>, document.getElementById('root'));
}
updateStore();

store.subscribe(updateStore);


