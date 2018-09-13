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

        // create a reference for the clear search button DOM element.
        this.clearSearchButton = React.createRef();

        this.clear = this.clear.bind(this);
        this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
        this.search = this.search.bind(this);
    }

	render() {
		return (
            <div className="SearchBar">
                <button 
                    className="search-bar-button search-bar-button-search"
                    onClick={this.search}
                    title={STRINGS.Search}>
                    <MdSearch />
                </button>
                <input 
                    className="search-bar-input" 
                    onChange={this.handleSearchTextChanged}
                    type="text"
                    value={this.props.searchText} />
                <button 
                    className="search-bar-button search-bar-button-clear"
                    onClick={this.clear}
                    ref={this.clearSearchButton}
                    style={{ display: 'none' }}
                    title={STRINGS.Clear}>
                    <MdClear />
                </button>
			</div>
		);
    }
    
    /**
     * Clears the current search bar input text.
     * @param {object} e The event object.
     */
    clear(e) {
        console.log('clear clicked');
        if (this.props.searchText) {
            // hide the clear search button:
            this.setClearSearchButtonDisplay(this.props.searchText, '');

            // clear the search text:
            this.props.setSearchText('');
        }
    }

    /**
     * Determines if the clear search button should be displayed or hidden.
     * @param {string} oldText The 'old' text value in the search bar.
     * @param {string} newText The new text value in the search bar.
     */
    setClearSearchButtonDisplay(oldText, newText) {
        if (!oldText && newText) {
            // the search bar was previously empty, but now contains text.
            this.clearSearchButton.current.style.display = 'block';
        } else if (oldText && !newText) {
            // the search bar previously contained text, but is now empty.
            this.clearSearchButton.current.style.display = 'none';
        }
    }

    /**
     * Called when the search input changes.
     * @param {object} e The event object.
     */
    handleSearchTextChanged(e) {

        let newText = e.target.value;
        console.log('search text changed from ' + this.props.searchText + ' to ' + newText);
        if (this.props.searchText !== newText) {
            // the search bar text changed.

            // check to see if the clear search button's visibility needs to be updated:
            this.setClearSearchButtonDisplay(this.props.searchText, newText);

            // update the search text in the store:
            this.props.setSearchText(newText);
        }
    }

    /**
     * Performs a search based on the current search bar input text.
     * @param {object} e The event object.
     */
    search(e) {
        console.log('search clicked. Will search for ' + this.props.searchText);
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