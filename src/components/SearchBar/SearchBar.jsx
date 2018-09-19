import React, { Component } from 'react';
import SearchBarButton from './SearchBarButton/SearchBarButton';
import SearchBarInput from './SearchBarInput/SearchBarInput';
import STRINGS from '../../resources/strings';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdClear, MdSearch  } from 'react-icons/md';
import { setSearchText } from '../../redux/actions/app-actions';

const unfocusedClassNames = 'search-bar-inner-div';
const focusedClassNames = unfocusedClassNames + ' inner-input-focused';

export class SearchBar extends Component {

    constructor() {
        super();
        
        // In this component, local state will be used to determine the 
        // style of the search bar, based on whether or not it is in focus.
        this.state = { innerDivClassNames: unfocusedClassNames };

        this.handleClearSearchText = this.handleClearSearchText.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchBlurred = this.handleSearchBlurred.bind(this);
        this.handleSearchFocused = this.handleSearchFocused.bind(this);
        this.handleSearchKeyDown = this.handleSearchKeyDown.bind(this);
        this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
    }

	render() {
        var innerDivClassNames = this.state.innerDivClassNames;

		return (
            <div 
                className="SearchBar"
                style={{ backgroundColor: this._backgroundColor }}
            >
                <div className={innerDivClassNames}>
                    <SearchBarButton 
                        content={<MdSearch />}
                        id="search-bar-search-button"
                        onClick={this.search}
                        title={STRINGS.Search}
                    />
                    <SearchBarInput 
                        onBlur={this.handleSearchBlurred}
                        onChange={this.handleSearchTextChanged}
                        onFocus={this.handleSearchFocused}
                        onKeyDown={this.handleSearchKeyDown}
                    />
                    {
                        // only display the clear-search button if the search bar contains text
                        (this.props.searchText)
                        ?   <SearchBarButton
                                content={<MdClear />}
                                id="search-bar-clear-button"
                                onClick={this.handleClearSearchText}
                                title={STRINGS.Clear}
                            />
                        :   null
                    }
                </div>
            </div>
		);
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
     * Performs a search based on the current search bar input text.
     * @param {object} e The event object.
     */
    handleSearch(e) {
        if (this.props.searchText) {

        }
    }

    /**
     * Called when the search input loses focus.
     * @param {object} e The event object.
     */
    handleSearchBlurred(e) {
        // remove the focused class name from this element, to revert to the
        // search bar's default style.
        this.setState({ innerDivClassNames: unfocusedClassNames });
    }

    /**
     * Called when the search input receives focus.
     * @param {object} e The event object.
     */
    handleSearchFocused(e) {
        // add the focused class name to this element, which will control
        // the search bar style when it is focused.
        this.setState({ innerDivClassNames: focusedClassNames });
    }

    /**
     * Called when there is a key-down event in the search input.
     * @param {object} e The event object.
     */
    handleSearchKeyDown(e) {
        
    }

    /**
     * Called when the search input changes.
     * @param {object} e The event object.
     */
    handleSearchTextChanged(e) {
        if (e.which === 13) {
            console.log('enter pressed!!!!!!');
        } else if (this.props.searchText !== e.target.value) {
            this.props.setSearchText(e.target.value);
        }
    }

}

function mapStateToProps(store, ownProps) {
    return {
        searchText: store.app.searchText
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setSearchText: setSearchText
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);