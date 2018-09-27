import React, { Component } from 'react';
import HeaderButton from '../HeaderButton/HeaderButton';
import SearchBar from '../SearchBar/SearchBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdMenu, MdSearch, MdSettings  } from 'react-icons/md';
import { setDrawerVisibility } from '../../redux/actions/app-actions';
import { setSearchBarVisibility } from '../../redux/actions/search-actions';

export class Header extends Component {

    constructor() {
        super();

        this.handleDrawerButtonClicked = this.handleDrawerButtonClicked.bind(this);
        this.handleSearchButtonClicked = this.handleSearchButtonClicked.bind(this);
        this.handleSettingsButtonClicked = this.handleSettingsButtonClicked.bind(this);
    }

	render() {
        const headerLeftElementGroupClassName = 'Header__left-element-group';
        const headerRightElementGroupClassName = 'Header__right-element-group';
        const headerElementClassName = 'Header__element';
        const headerLogoClassName = 'Header__logo';
        const headerMenuButtonId = 'Header__menu-button';
        const headerSearchButtonId = 'Header__search-button';
        const headerSettingsButtonId = 'Header__settings-button';

		return (
			<header className="Header">
                <div className={headerLeftElementGroupClassName}>
                    <div className={headerElementClassName}>
                        <HeaderButton
                            content={<MdMenu />}
                            id={headerMenuButtonId}
                            onClick={this.handleDrawerButtonClicked} 
                        />
                    </div>
                    {
                        (this.shouldShowLogo())
                        ?   <div className={headerElementClassName + ' ' + headerLogoClassName}>
                                logo
                            </div>
                        : null
                    }
                    {
                        (this.shouldShowSearchBar())
                        ?   <div className={headerElementClassName}>
                                <SearchBar />
                            </div>
                        :   null
                    }
                </div>
                <div className={headerRightElementGroupClassName}>
                    {
                        (this.shouldShowSearchButton())
                        ?   <div className={headerElementClassName}>
                                <HeaderButton
                                    content={<MdSearch />}
                                    id={headerSearchButtonId}
                                    onClick={this.handleSearchButtonClicked} 
                                />
                            </div>
                        :   null
                    }
                    <div className={headerElementClassName}>
                        <HeaderButton
                            content={<MdSettings />}
                            id={headerSettingsButtonId}
                            onClick={this.handleSettingsButtonClicked} 
                        />
                    </div>
                </div>
			</header>
		);
    }
    
    /**
     * Called when the user clicks the open/close drawer button.
     * @param {object} e The event.
     */
    handleDrawerButtonClicked(e) {
        this.props.setDrawerVisibility(!this.props.isDrawerVisible);
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
        isDrawerVisible: store.app.isDrawerVisible,
        isSearchBarVisible: store.search.isSearchBarVisible,
        isSmallScreen: store.app.isSmallScreen
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setDrawerVisibility: setDrawerVisibility,
        setSearchBarVisibility: setSearchBarVisibility
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);