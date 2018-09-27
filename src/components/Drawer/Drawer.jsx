import React, { Component } from 'react';
import ComposeEmailButton from '../ComposeEmailButton/ComposeEmailButton';
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
                    <ComposeEmailButton content="New Email" />
                </div>
                {
                    // The shadow that appears behind the drawer should only be
                    // visible on small screens
                    (this.props.isSmallScreen)
                    ?   <div 
                            className={this.getDrawerShadowClassNames()}
                            onClick={this.handleDrawerShadowClicked}
                        >
                        </div>
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
        const drawerContentVisibleClassNames = drawerContentClassName + ' Drawer__content--visible';

        return (this.props.isDrawerVisible)
            ? drawerContentVisibleClassNames 
            : drawerContentClassName;
    }

    /**
     * Gets the class names drawer's shadow. The style for the drawer's shadow will
     * be updated if the isDrawerVisible prop is true.
     * Note: this method will only be called on small screen devices.
     * @returns {string} The name of the drawer classes.
     */
    getDrawerShadowClassNames() {
        const drawerShadowClassName = 'Drawer__shadow';
        const drawerShadowVisibleClassNames = drawerShadowClassName + ' Drawer__shadow--visible';

        return (this.props.isDrawerVisible)
            ? drawerShadowVisibleClassNames
            : drawerShadowClassName;
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