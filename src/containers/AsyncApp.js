import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { test, only } from '../store/action'

class AsyncApp extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const {
			dispatch,
			fn
		} = this.props;
		dispatch(test(fn))
	}
	handleClick(e) {
		const {
			dispatch
		} = this.props;
	    e.preventDefault()
	    dispatch(only("123"))
  	}
	render () {
		const { dispatch, test, showOnly, zyl } = this.props
		return (
			<div>
				<div>{test}</div>
				<button onClick={(e) => this.handleClick(e)}>
	          		Add
	        	</button>
	        	<div>{showOnly}</div>
	        	<div>{zyl == 'zhangyunlu' ? 1 : 2}</div>
        	</div>
		)
	}

}
function mapStateToProps(state) {
	const {
		deliverTest,
		showOnly
	} = state;
	console.log(state);
	const zyl = "zhangyunlu"
	return {
		deliverTest,
		showOnly,
		zyl,
		fn: function() {
			console.log(123);
		}
	}
}
export default connect(mapStateToProps)(AsyncApp)