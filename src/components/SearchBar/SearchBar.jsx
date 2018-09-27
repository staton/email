import React, { Component } from 'react';
import SearchBarButton from '../SearchBarButton/SearchBarButton';
import SearchBarInput from '../SearchBarInput/SearchBarInput';
import STRINGS from '../../resources/strings';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdClear, MdSearch  } from 'react-icons/md';
import { 
    search,
    setSearchBarFocus,
    setSearchText 
} from '../../redux/actions/search-actions';

export class SearchBar extends Component {

    constructor() {
        super();

        this.handleClearSearchText = this.handleClearSearchText.bind(this);
        this.handleSearchButtonClicked = this.handleSearchButtonClicked.bind(this);
        this.handleSearchBlurred = this.handleSearchBlurred.bind(this);
        this.handleSearchFocused = this.handleSearchFocused.bind(this);
        this.handleSearchKeyPressed = this.handleSearchKeyPressed.bind(this);
        this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
    }

	render() {
        const searchBarClassNames = this.getSearchBarClassNames();
        const innerDivClassNames = this.getSearchBarInnerDivClassNames();
        
        //style={{ backgroundColor: this._backgroundColor }}
		return (
            <div className={searchBarClassNames}>
                <div className={innerDivClassNames}>
                    <SearchBarButton 
                        content={<MdSearch />}
                        onClick={this.handleSearchButtonClicked}
                        title={STRINGS.Search}
                    />
                    <SearchBarInput 
                        onBlur={this.handleSearchBlurred}
                        onChange={this.handleSearchTextChanged}
                        onFocus={this.handleSearchFocused}
                        onKeyPress={this.handleSearchKeyPressed}
                    />
                    {
                        // only display the clear-search button if the search bar contains text
                        (this.props.searchText)
                        ?   <SearchBarButton
                                content={<MdClear />}
                                onClick={this.handleClearSearchText}
                                title={STRINGS.Clear}
                            />
                        :   null
                    }
                </div>
            </div>
		);
    }
    
    getSearchBarClassNames() {
        const searchBarClassName = 'SearchBar';
        const searchBarDisabledClassNames = searchBarClassName + ' SearchBar--disabled';

        return (this.props.isSearching)
            ? searchBarDisabledClassNames
            : searchBarClassName;
    }

    /**
     * Gets the class names for the search bar, based on if the input is focused or not.
     * @returns {string} The class names for the search bar.
     */
    getSearchBarInnerDivClassNames() {
        const searchBarInnerDivClassName = 'SearchBar__inner-div';
        const searchBarInnerDivFocusedClassNames = searchBarInnerDivClassName + ' SearchBar__inner-div--focused';

        return (this.props.isSearchBarFocused)
            ? searchBarInnerDivFocusedClassNames
            : searchBarInnerDivClassName;
    }
    
    /**
     * Clears the current search bar input text.
     * @param {object} e The event object.
     */
    handleClearSearchText(e) {
        if (this.props.searchText) {
            this.props.setSearchText('');
        }
    }

    /**
     * Called when the user clicks on the search bar's search button.
     * @param {object} e The event object.
     */
    handleSearchButtonClicked(e) {
        if (!this.props.isSearching && this.props.searchText) {
            this.props.search(this.props.searchText);
        }
    }

    /**
     * Called when the search input loses focus.
     * @param {object} e The event object.
     */
    handleSearchBlurred(e) {
        this.props.setSearchBarFocus(false);
    }

    /**
     * Called when the search input receives focus.
     * @param {object} e The event object.
     */
    handleSearchFocused(e) {
        this.props.setSearchBarFocus(true);
    }

    /**
     * Called when there is a key-down event in the search input.
     * @param {object} e The event object.
     */
    handleSearchKeyPressed(e) {
        if (!this.props.isSearching && e.key === 'Enter' && this.props.searchText) {
            this.props.search(this.props.searchText);
        }
    }

    /**
     * Called when the search input changes.
     * @param {object} e The event object.
     */
    handleSearchTextChanged(e) {
        if (this.props.searchText !== e.target.value) {
            this.props.setSearchText(e.target.value);
        }
    }

}

function mapStateToProps(store, ownProps) {
    return {
        isSearchBarFocused: store.search.isSearchBarFocused,
        isSearching: store.search.isSearching,
        searchText: store.search.searchText
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        search: search,
        setSearchBarFocus: setSearchBarFocus,
        setSearchText: setSearchText
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);