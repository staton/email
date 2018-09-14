import React, { Component } from 'react';
import PropTypes from 'prop-types';
import STRINGS from '../../resources/strings';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdClear, MdSearch  } from 'react-icons/md';
import { setSearchText } from '../../redux/actions/email-actions';

const propTypes = {
};

const defaultProps = {
};

export class SearchBar extends Component {

    constructor() {
        super();

        // the background color of the entire search bar.
        this._backgroundColor = 'rgb(241, 243, 244)';
        // the background color of the entire search bar, when hovered.
        this._hoveredBackgroundColor = 'rgb(232, 234, 237)';
        // the background color of the entire search bar, when focused.
        this._focusedBackgroundColor = 'rgb(255, 255, 255)';
        // the shadow of the entire search bar, when focused.
        this._focusedBoxShadow = '0 0 .2rem 0 rgba(41, 182, 246, 1.0)';

        // a reference to the entire search bar DOM element.
        this._searchBar = React.createRef();
        // a reference to the search input DOM element.
        this._searchBarInput = React.createRef();

        this.clearSearchText = this.clearSearchText.bind(this);
        this.handleSearchBlurred = this.handleSearchBlurred.bind(this);
        this.handleSearchFocused = this.handleSearchFocused.bind(this);
        this.handleSearchMouseEnter = this.handleSearchMouseEnter.bind(this);
        this.handleSearchMouseLeave = this.handleSearchMouseLeave.bind(this);
        this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
        this.search = this.search.bind(this);
    }

	render() {
		return (
            <div 
                className="SearchBar"
                onClick={this.handleSearchFocused}
                onMouseEnter={this.handleSearchMouseEnter}
                onMouseLeave={this.handleSearchMouseLeave}
                ref={this._searchBar}
                style={{ backgroundColor: this._backgroundColor }}
            >
                <button 
                    className="search-bar-button"
                    onClick={this.search}
                    onMouseDown={(e) => e.preventDefault()}
                    title={STRINGS.Search}
                >
                    <MdSearch />
                </button>
                <input 
                    className="search-bar-input" 
                    onBlur={this.handleSearchBlurred}
                    onChange={this.handleSearchTextChanged}
                    onKeyDown={}
                    ref={this._searchBarInput}
                    type="text"
                    value={this.props.searchText} 
                />
                    {
                        // only display the clear-search button if the search bar contains text
                        (this.props.searchText)
                        ?   <button 
                                className="search-bar-button"
                                onClick={this.clearSearchText}
                                onMouseDown={(e) => e.preventDefault()}
                                title={STRINGS.Clear}
                            >
                                <MdClear />
                            </button>
                        :   null
                    }
            </div>
		);
    }
    
    /**
     * Clears the current search bar input text.
     * @param {object} e The event object.
     */
    clearSearchText(e) {
        if (this.props.searchText) {
            this.props.setSearchText('');
        }
    }

    /**
     * Called when the search input loses focus.
     * @param {object} e The event object.
     */
    handleSearchBlurred(e) {
        this._searchBar.current.style.backgroundColor = this._backgroundColor;
        this._searchBar.current.style.boxShadow = 'none';
    }

    /**
     * Called when the search input receives focus.
     * @param {object} e The event object.
     */
    handleSearchFocused(e) {
        this._searchBar.current.style.backgroundColor = this._focusedBackgroundColor;
        this._searchBar.current.style.boxShadow = this._focusedBoxShadow;
    }

    /**
     * Called when the user's mouse hovers over any part of the search bar.
     * @param {object} e The event object.
     */
    handleSearchMouseEnter(e) {
        // if the search input is already focused, then do not change the background color.
        if (document.activeElement !== this._searchBarInput.current) {
            this._searchBar.current.style.backgroundColor = this._hoveredBackgroundColor;
        }
    }

    /**
     * Called when the user's mouse exits from hovering over any part of the search bar.
     * @param {object} e The event object.
     */
    handleSearchMouseLeave(e) {
        // if the search input is already focused, then do not change the background color.
        if (document.activeElement !== this._searchBarInput.current) {
            this._searchBar.current.style.backgroundColor = this._backgroundColor;
        }
    }

    /**
     * Called when the search input changes.
     * @param {object} e The event object.
     */
    handleSearchTextChanged(e) {
        if (e.which === 13) {
            console.log('enter pressed!!!!!!');
        } else if (this.props.searchText !== e.target.value) {
            // the search bar text changed. Update the search text in the store:
            this.props.setSearchText(e.target.value);
        }
    }

    /**
     * Performs a search based on the current search bar input text.
     * @param {object} e The event object.
     */
    search(e) {
        if (this.props.searchText) {

        }
    }

}

function mapStateToProps(store, ownProps) {
    return {
        searchText: store.email.searchText
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setSearchText: setSearchText
    },
    dispatch);
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);