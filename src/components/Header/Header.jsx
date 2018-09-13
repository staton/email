import React, { Component } from 'react';
import HeaderButton from '../HeaderButton/HeaderButton';
import SearchBar from '../SearchBar/SearchBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdMenu  } from 'react-icons/md';

export class Header extends Component {

    constructor() {
        super();

        this.handleDrawerButtonClicked = this.handleDrawerButtonClicked.bind(this);
    }

	render() {
		return (
			<div className="Header">
                <HeaderButton
                    content={<MdMenu />}
                    onClick={this.handleDrawerButtonClicked} />
                <SearchBar />
			</div>
		);
    }
    
    /**
     * Called when the user clicks the open/close drawer button.
     * @param {object} e The event.
     */
    handleDrawerButtonClicked(e) {
        console.log('drawer button clicked');
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