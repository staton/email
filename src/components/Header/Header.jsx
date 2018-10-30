import React, { Component } from 'react';
import ListSelectionHeader from '../ListSelectionHeader/ListSelectionHeader';
import MainHeader from '../MainHeader/MainHeader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Header extends Component {

	render() {
		return (
			<header className="Header">
                {this.getHeader()}
			</header>
		);
    }

    /**
     * Gets the header for the app.
     * @returns {Element} The header to display.
     */
    getHeader() {
        const leftGroupClassName = 'Header__left-element-group';
        const rightGroupClassName = 'Header__right-element-group';
        const elementClassName = 'Header__element';

        if (this.props.isSmallScreen) {
            if (this.props.isInboxListActive)   // The list is in the active state, show the selection header:
                return this.getListSelectionHeader(leftGroupClassName, rightGroupClassName, elementClassName);
            else if (this.props.isSearching)    // The user is searching, show the search header (TODO):
                return this.getMainHeader(leftGroupClassName, rightGroupClassName, elementClassName);
        }

        // Normal state, show the main header (note: large screen devices will always show the main header):
        return this.getMainHeader(leftGroupClassName, rightGroupClassName, elementClassName);
    }

    /**
     * Gets the List Selection Header, displayed when selecting multiple emails on small screen devices.
     * @param {string} leftGroupClassName The class name for the left element group.
     * @param {string} rightGroupClassName The class name for the right element group.
     * @param {string} elementClassName The class name for the header element items.
     * @returns {Element} The List Selection Header.
     */
    getListSelectionHeader(leftGroupClassName, rightGroupClassName, elementClassName) {
        return (
            <ListSelectionHeader 
                leftElementGroupClassName={leftGroupClassName}
                rightElementGroupClassName={rightGroupClassName}
                elementClassName={elementClassName}
            />
        );
    }

    /**
     * Gets the Main Header.
     * @param {string} leftGroupClassName The class name for the left element group.
     * @param {string} rightGroupClassName The class name for the right element group.
     * @param {string} elementClassName The class name for the header element items.
     * @returns {Element} The Main Header.
     */
    getMainHeader(leftGroupClassName, rightGroupClassName, elementClassName) {
        return (
            <MainHeader 
                leftElementGroupClassName={leftGroupClassName}
                rightElementGroupClassName={rightGroupClassName}
                elementClassName={elementClassName}
            />
        );
    }

}

function mapStateToProps(store, ownProps) {
    return {
        isInboxListActive: store.email.isInboxListActive,
        isSearching: store.search.isSearching,
        isSmallScreen: store.app.isSmallScreen
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);