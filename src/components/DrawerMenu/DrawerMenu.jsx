import React, { Component } from 'react';
import ComposeEmailButton from '../ComposeEmailButton/ComposeEmailButton';
import DrawerMenuList from '../DrawerMenuList/DrawerMenuList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class DrawerMenu extends Component {

	render() {
		return (
            <div className="DrawerMenu">
                {
                    // For small screens, do not show the New Email button here.
                    // (It will be a FAB for small screens. (see: App.jsx))
                    (this.props.isSmallScreen)
                    ?   null
                    :   <ComposeEmailButton content="New Email" />
                }
                <DrawerMenuList />
            </div>
		);
    }

}

function mapStateToProps(store, ownProps) {
    return {
        isSmallScreen: store.app.isSmallScreen
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);