import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import {incAC, decAC, resAC, rndAC} from './actions';

const store = createStore(reducer);
const {dispatch} = store;
const {incDispatch, decDispatch, resDispatch, rndDispatch} = bindActionCreators(
	{
		incDispatch: incAC,
		decDispatch: decAC,
		resDispatch: resAC,
		rndDispatch: rndAC,
	}
	, dispatch);

// const decDispatch = bindActionCreators(decAC, dispatch);
// const resDispatch = bindActionCreators(resAC, dispatch);
// const rndDispatch = bindActionCreators(rndAC, dispatch);

document.getElementById('inc').addEventListener('click', incDispatch);

document.getElementById('dec').addEventListener('click', decDispatch);

document.getElementById('res').addEventListener('click', resDispatch);

document.getElementById('rnd').addEventListener('click', () => {
	const value = Math.floor(Math.random() * 10);
	rndDispatch(value)
})

const updateStore = () => {
	document.getElementById('counter').textContent = store.getState();
}

store.subscribe(updateStore);

