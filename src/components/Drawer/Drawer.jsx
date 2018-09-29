import React, { Component } from 'react';
import DrawerMenu from '../DrawerMenu/DrawerMenu';
import ScreenOverlay from '../ScreenOverlay/ScreenOverlay';
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
                <div className={this.getDrawerContentClassNames()}>
                    <DrawerMenu />
                </div>
                {
                    // The shadow that appears behind the drawer should only be visible on small screens
                    (this.props.isSmallScreen)
                    ?   <ScreenOverlay
                            isVisible={this.props.isDrawerVisible}
                            onClick={this.handleDrawerShadowClicked}
                            zIndex={78}
                        />
                    :   null
                }
			</div>
		);
    }

    /**
     * Gets the inline style for the drawer. The style for the drawer will be updated
     * if the isDrawerVisible prop is true.
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