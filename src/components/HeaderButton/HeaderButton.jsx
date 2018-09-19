import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

function mapStateToProps(store, ownProps) {
    return {
        content: ownProps.content,
        onClick: ownProps.onClick
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