import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Header extends Component {
	render() {
		return (
			<div className="Header">
				Header ==============
			</div>
		);
	}
}

// myComponentProp1: store.email.property
function mapStateToProps(store, ownProps) {
    return {
    };
}

// myComponentMethod: ImportedReduxAction.doSomething
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);