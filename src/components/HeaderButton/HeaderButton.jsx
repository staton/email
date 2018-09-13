import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const propTypes = {
    content: PropTypes.any.isRequired,
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
                onClick={this.props.handleClick}>
				{this.props.content}
			</button>
		);
	}
}

function mapStateToProps(store, ownProps) {
    return {
        content: ownProps.content,
        handleClick: ownProps.onClick
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    },
    dispatch);
}

HeaderButton.propTypes = propTypes;
HeaderButton.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(HeaderButton);