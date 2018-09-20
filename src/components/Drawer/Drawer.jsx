import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setDrawerVisibility } from '../../redux/actions/app-actions';

export class Drawer extends Component {

    constructor() {
        super();

        this.handleDrawerShadowClicked = this.handleDrawerShadowClicked.bind(this);
    }

	render() {
		return (
			<div className="Drawer">
                <div className={this.getDrawerClassNames()}>
                    Drawer
                </div>
                {
                    // The shadow that appears behind the drawer should only be
                    // visible on small screens
                    (this.props.isSmallScreen)
                    ?   <div 
                            className={this.getDrawerShadowClassNames()}
                            onClick={this.handleDrawerShadowClicked}>
                        </div>
                    :   null
                }
			</div>
		);
    }

    /**
     * Gets the class name(s) for the drawer, based on it's current state.
     * @returns {string} The class name(s) for the drawer.
     */
    getDrawerClassNames() {
        return (this.props.isDrawerVisible)
            ? 'drawer-content drawer-content-visible'
            : 'drawer-content';
    }

    /**
     * Gets the class name(s) for the drawer, based on it's current state.
     * @returns {string} The class name(s) for the drawer shadow.
     */
    getDrawerShadowClassNames() {
        return (this.props.isDrawerVisible)
            ? 'drawer-shadow drawer-shadow-visible'
            : 'drawer-shadow';
    }

    /**
     * Called when the user taps on the drawer shadow.
     * @param {object} e The event.
     */
    handleDrawerShadowClicked(e) {
        this.props.setDrawerVisibility(false);
    }

}

function mapStateToProps(store, ownProps) {
    return {
        isDrawerVisible: store.app.isDrawerVisible,
        isSmallScreen: store.app.isSmallScreen
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setDrawerVisibility: setDrawerVisibility
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);