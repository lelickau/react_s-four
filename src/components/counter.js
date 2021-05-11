import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, res, rnd}) => {
    return (
        <div className="container">
            <div className="item">
                <div className="counter">{counter}</div>
            </div>
            <div className="btn-box">
                <button onClick={dec} className="btn btn-minus">
                    <img src={process.env.PUBLIC_URL + 'img/Minus.svg'} alt="minus" />
                </button>
                <button onClick={res} className="btn btn-reset">
                    <img src={process.env.PUBLIC_URL + "img/reset.svg"} alt="reset" />
                </button>
                <button onClick={rnd} className="btn btn-reset">
                    <img src={process.env.PUBLIC_URL + "img/reset.svg"} alt="random" />
                </button>
                <button onClick={inc} className="btn btn-plus">
                    <img src={process.env.PUBLIC_URL + "img/plus.svg"} alt="plus" />
                </button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);