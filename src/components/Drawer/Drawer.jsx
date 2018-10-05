import React, { Component } from 'react';
import DrawerMenu from '../DrawerMenu/DrawerMenu';
import ScreenOverlay from '../ScreenOverlay/ScreenOverlay';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setDrawerVisibility } from '../../redux/actions/app-actions';

export class Drawer extends Component {

    constructor() {
        super();

        this.handleDrawerOverlayClicked = this.handleDrawerOverlayClicked.bind(this);
    }

	render() {
		return (
			<div className="Drawer">
                <div className={this.getDrawerContentClassNames()}>
                    <DrawerMenu />
                </div>
                {
                    // The overlay that appears behind the drawer should only be visible on small screens
                    (this.props.isSmallScreen)
                    ?   <ScreenOverlay
                            isVisible={this.props.isDrawerVisible}
                            onClick={this.handleDrawerOverlayClicked}
                            zIndex={127}
                        />
                    :   null
                }
			</div>
		);
    }

    /**
     * Gets class name(s) for the drawer.
     * @returns {string} The name of the drawer content classes.
     */
    getDrawerContentClassNames() {
        const drawerContentClassName = 'Drawer__content';
        const drawerContentHiddenClassNames = drawerContentClassName + ' Drawer__content--hidden';

        return (this.props.isDrawerVisible)
            ? drawerContentClassName
            : drawerContentHiddenClassNames;
    }

    /**
     * Called when the user taps on the drawer overlay.
     * @param {object} e The event.
     */
    handleDrawerOverlayClicked(e) {
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