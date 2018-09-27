import React, { Component } from 'react';
import PropTypes from 'prop-types';
import STRINGS from '../../resources/strings';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const propTypes = {
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyPress: PropTypes.func,
    placeholder: PropTypes.string
};

const defaultProps = {
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    onKeyPress: () => {},
    placeholder: STRINGS.SearchPlaceholder
};

export class SearchBarInput extends Component {

    constructor() {
        super();
    }

	render() {
		return (
            <input 
                className="SearchBarInput"
                onBlur={this.props.onBlur}
                onChange={this.props.onChange}
                onFocus={this.props.onFocus}
                onKeyPress={this.props.onKeyPress}
                placeholder={this.props.placeholder}
                type="text"
                value={this.props.searchText} 
            />
		);
    }

}

function mapStateToProps(store, ownProps) {
    return {
        searchText: store.search.searchText,
        onBlur: ownProps.onBlur,
        onChange: ownProps.onChange,
        onFocus: ownProps.onFocus,
        onKeyPress: ownProps.onKeyPress
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    },
    dispatch);
}

SearchBarInput.propTypes = propTypes;
SearchBarInput.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarInput);