import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const propTypes = {
    content: PropTypes.any.isRequired,
    needsLeftMargin: PropTypes.bool,
    onClick: PropTypes.func
};

const defaultProps = {
    needsLeftMargin: false,
    onClick: () => {}
};

export class HeaderButton extends Component {
	render() {
		return (
            <button 
                className={"HeaderButton" + (this.props.needsLeftMargin ? " first-header-button" : "") }
                onClick={this.props.handleClick}>
				{this.props.content}
			</button>
		);
	}
}

function mapStateToProps(store, ownProps) {
    return {
        content: ownProps.content,
        needsLeftMargin: ownProps.needsLeftMargin,
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