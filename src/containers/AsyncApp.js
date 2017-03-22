import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { test, only, run } from '../store/action'

class AsyncApp extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const {
			dispatch
		} = this.props;
		dispatch(run('这个很关键'))
	}
	handleClick(e) {
		const {
			dispatch,
			fn
		} = this.props;
	    e.preventDefault();
		setTimeout(function(){
	    	dispatch(only("123"));
		}, 1000);
    	dispatch(only("test"));
  	}
  	handleChange(e) {
  		console.log(e,'这个应该不是个函数了');
  		const {
			dispatch
		} = this.props;
		dispatch(test(e));
  	}
	render () {
		const { dispatch, deliverTest, showOnly, zyl, runText } = this.props
		return (
			<div>
				<div>{deliverTest}</div>
				<div>00000{runText}00000</div>
				<button onClick={(e) => this.handleClick(e)}>
	          		Add
	        	</button>
	        	<select onChange={e => this.handleChange(e.target.value)}>
                	<option value="111">111</option>
                	<option value="222">222</option>
                </select>
	        	<div>88888{showOnly}88888</div>
	        	<div>{zyl}</div>
        	</div>
		)
	}

}
function mapStateToProps(state) {
	const {
		deliverTest,
		showOnly,
		runText
	} = state;
	console.log(state,'这里可以检测变化么');
	let zyl = "zhangyunlu"
	return {
		deliverTest,
		showOnly,
		runText,
		zyl,
		fn: function() {
			zyl = "Zhang";
		}
	}
}
export default connect(mapStateToProps)(AsyncApp)