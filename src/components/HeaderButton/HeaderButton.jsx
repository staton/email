import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    content: PropTypes.any.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

const defaultProps = {
    onClick: () => {}
};

export class HeaderButton extends Component {
	render() {
		return (
            <button 
                className="HeaderButton"
                id={this.props.id}
                onClick={this.props.onClick}>
				{this.props.content}
			</button>
		);
	}
}

HeaderButton.propTypes = propTypes;
HeaderButton.defaultProps = defaultProps;

export default HeaderButton;