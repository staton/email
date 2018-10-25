import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderButton from '../HeaderButton/HeaderButton';
import SearchBar from '../SearchBar/SearchBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdMenu, MdSearch, MdSettings  } from 'react-icons/md';
import { setDrawerVisibility } from '../../redux/actions/app-actions';
import { setSearchBarVisibility } from '../../redux/actions/search-actions';

const propTypes = {
    leftElementGroupClassName: PropTypes.string.isRequired,
    rightElementGroupClassName: PropTypes.string.isRequired,
    elementClassName: PropTypes.string.isRequired
};

const defaultProps = {
};

export class MainHeader extends Component {

    constructor() {
        super();

        this.handleDrawerButtonClicked = this.handleDrawerButtonClicked.bind(this);
        this.handleSearchButtonClicked = this.handleSearchButtonClicked.bind(this);
        this.handleSettingsButtonClicked = this.handleSettingsButtonClicked.bind(this);
    }

	render() {
        const logoClassName = 'MainHeader__logo';
        const menuButtonId = 'MainHeader__menu-button';
        const searchButtonId = 'MainHeader__search-button';
        const settingsButtonId = 'MainHeader__settings-button';

		return (
			<header className="MainHeader">
                <div className={this.props.leftElementGroupClassName}>
                    <div className={this.props.elementClassName}>
                        <HeaderButton
                            content={<MdMenu />}
                            id={menuButtonId}
                            onClick={this.handleDrawerButtonClicked} 
                        />
                    </div>
                    <div className={this.props.elementClassName + ' ' + logoClassName}>
                        logo
                    </div>
                    {(this.props.isSmallScreen) ? null : this.getSearchBar()}
                </div>
                <div className={this.props.rightElementGroupClassName}>
                    {(this.props.isSmallScreen) ? this.getSearchButton(searchButtonId) : null}
                    <div className={this.props.elementClassName}>
                        <HeaderButton
                            content={<MdSettings />}
                            id={settingsButtonId}
                            onClick={this.handleSettingsButtonClicked} 
                        />
                    </div>
                </div>
			</header>
		);
    }
    
    /**
     * Gets the search bar element and its wrapper.
     * @returns {Element} The search bar element.
     */
    getSearchBar() {
        return (
            <div className={this.props.elementClassName}>
                <SearchBar />
            </div>
        );
    }

    /**
     * Gets the search button element and its wrapper.
     * @param {string} id The id of the search button.
     * @returns {Element} The search button element.
     */
    getSearchButton(id) {
        return (
            <div className={this.props.elementClassName}>
                <HeaderButton
                    content={<MdSearch />}
                    id={id}
                    onClick={this.handleSearchButtonClicked} 
                />
            </div>
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

}

MainHeader.propTypes = propTypes;
MainHeader.defaultProps = defaultProps;

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

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);