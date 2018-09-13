import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../Header/Header';

export class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);