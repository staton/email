import React, { Component } from 'react';
import PropTypes from 'prop-types';
import STRINGS from '../../resources/strings';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdClear, MdSearch  } from 'react-icons/md';

const propTypes = {
};

const defaultProps = {
};

export class SearchBar extends Component {

    constructor() {
        super();

        this.search = this.search.bind(this);
        this.clear = this.clear.bind(this);
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
                    type="text" />
                <button 
                    className="search-bar-button search-bar-button-clear"
                    onClick={this.clear}
                    title={STRINGS.Clear}>
                    <MdClear />
                </button>
			</div>
		);
    }
    
    /**
     * Performs a search based on the current search bar input text.
     * @param {object} e The event object.
     */
    search(e) {
        console.log('search clicked');
    }

    /**
     * Clears the current search bar input text.
     * @param {object} e The event object.
     */
    clear(e) {
        console.log('clear clicked');
    }
}

function mapStateToProps(store, ownProps) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    },
    dispatch);
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);