import React, { Component } from 'react';
import ComposeEmailButton from '../ComposeEmailButton/ComposeEmailButton';
import Drawer from '../Drawer/Drawer';
import Header from '../Header/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdEdit } from 'react-icons/md';
import { setScreenSize } from '../../redux/actions/app-actions';

export class App extends Component {

    constructor() {
        super();

        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

	render() {
		return (
			<div className="App">
				<Header />
                <div className="App__content">
                    <Drawer />
                </div>
                {
                    // For small screens, the New Email button will be a FAB.
                    // For larger screens, it will be in the drawer.
                    (this.props.isSmallScreen)
                    ?   <ComposeEmailButton content={<MdEdit />} />
                    :   null
                }
			</div>
		);
    }
    
    /**
     * Called when the window resizes.
     * @param {object} e The event.
     */
    handleResize(e) {
        this.props.setScreenSize(window.innerWidth, window.innerHeight);
    }

}

function mapStateToProps(store, ownProps) {
    return {
        isSmallScreen: store.app.isSmallScreen
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setScreenSize: setScreenSize
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);