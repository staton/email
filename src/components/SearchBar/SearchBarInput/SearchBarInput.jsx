import React, { Component } from 'react';
import PropTypes from 'prop-types';
import STRINGS from '../../../resources/strings';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const propTypes = {
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string
};

const defaultProps = {
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    onKeyDown: () => {},
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
                onKeyDown={this.props.onKeyDown}
                placeholder={this.props.placeholder}
                type="text"
                value={this.props.searchText} 
            />
		);
    }

}

function mapStateToProps(store, ownProps) {
    return {
        searchText: store.app.searchText,
        onBlur: ownProps.onBlur,
        onChange: ownProps.onChange,
        onFocus: ownProps.onFocus,
        onKeyDown: ownProps.onKeyDown
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