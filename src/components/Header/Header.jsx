import React, { Component } from 'react';
import HeaderButton from '../HeaderButton/HeaderButton';
import SearchBar from '../SearchBar/SearchBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdMenu, MdSearch, MdSettings  } from 'react-icons/md';
import { setSearchBarVisibility } from '../../redux/actions/app-actions';

export class Header extends Component {

    constructor() {
        super();

        this.searchBarContainer = React.createRef();
        this.handleDrawerButtonClicked = this.handleDrawerButtonClicked.bind(this);
        this.handleSearchButtonClicked = this.handleSearchButtonClicked.bind(this);
        this.handleSettingsButtonClicked = this.handleSettingsButtonClicked.bind(this);
    }

	render() {
		return (
			<div className="Header">
                <div className="left-side-elements">
                    <div className="header-element">
                        <HeaderButton
                            content={<MdMenu />}
                            id="header-menu-button"
                            onClick={this.handleDrawerButtonClicked} 
                        />
                    </div>
                    {
                        (this.shouldShowLogo())
                        ?   <div className="header-element logo">
                                logo
                            </div>
                        : null
                    }
                    {
                        (this.shouldShowSearchBar())
                        ?   <div 
                                className="header-element"
                                ref={this.searchBarContainer}
                            >
                                <SearchBar />
                            </div>
                        :   null
                    }
                </div>
                <div className="right-side-elements">
                    {
                        (this.shouldShowSearchButton())
                        ?   <div className="header-element">
                                <HeaderButton
                                    content={<MdSearch />}
                                    id="header-search-button"
                                    onClick={this.handleSearchButtonClicked} 
                                />
                            </div>
                        :   null
                    }
                    <div className="header-element">
                        <HeaderButton
                            content={<MdSettings />}
                            id="header-settings-button"
                            onClick={this.handleSettingsButtonClicked} 
                        />
                    </div>
                </div>
			</div>
		);
    }
    
    /**
     * Called when the user clicks the open/close drawer button.
     * @param {object} e The event.
     */
    handleDrawerButtonClicked(e) {
        
    }

    /**
     * Called when the user clicks the search button in the header.
     * @param {object} e The event.
     */
    handleSearchButtonClicked(e) {
        this.props.setSearchBarVisibility(!this.props.isSearchBarVisible);
    }

    /**
     * Called when the user clicks on the settings button.
     * @param {object} e The event.
     */
    handleSettingsButtonClicked(e) {
        
    }

    /**
     * Checks to see if the logo should be visible.
     * @returns {boolean} True to show the logo, false to hide it.
     */
    shouldShowLogo() {
        // if the user has a large screen or if the search bar should be hidden, show the logo.
        return (!this.props.isSmallScreen || !this.props.isSearchBarVisible);
    }

    /**
     * Checks to see if the search bar should be visible.
     * @returns {boolean} True to show the search bar, false to hide it.
     */
    shouldShowSearchBar() {
        // if the user has a large screen or if the search bar should be visible, show the search bar.
        return (!this.props.isSmallScreen || this.props.isSearchBarVisible);
    }

    /**
     * Checks to see if the search button in the header should be visible.
     * @returns {boolean} True to show the search button in the header, false to hide it.
     */
    shouldShowSearchButton() {
        // Only show the search button on small screens.
        return (this.props.isSmallScreen);
    }

}

function mapStateToProps(store, ownProps) {
    return {
        isSmallScreen: store.app.isSmallScreen,
        isSearchBarVisible: store.app.isSearchBarVisible
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setSearchBarVisibility: setSearchBarVisibility
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);