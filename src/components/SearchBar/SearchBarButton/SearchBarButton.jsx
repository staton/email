import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    content: PropTypes.any.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.string
};

const defaultProps = {
    onClick: () => {},
    title: ''
};

export class SearchBarButton extends Component {

    constructor(props) {
        super(props);
    }

	render() {
		return (
            <button 
                className="SearchBarButton"
                id={this.props.id}
                onClick={this.props.onClick}
                onMouseDown={(e) => e.preventDefault()}
                title={this.props.title}
            >
                {this.props.content}
            </button>
		);
    }

}

SearchBarButton.propTypes = propTypes;
SearchBarButton.defaultProps = defaultProps;

export default SearchBarButton;