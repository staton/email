import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const propTypes = {
    badge: PropTypes.number,
    onClick: PropTypes.func,
    primaryContent: PropTypes.any.isRequired,
    secondaryContent: PropTypes.any,
    title: PropTypes.string
};

const defaultProps = {
    badge: null,
    onClick: () => {},
    secondaryContent: null,
    title: ''
};

export class DrawerMenuItem extends Component {

	render() {
		return (
            <li className="DrawerMenuItem">
                <div className="DrawerMenuItem__container">
                { this.props.primaryContent }
                </div>
            </li>
		);
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

DrawerMenuItem.propTypes = propTypes;
DrawerMenuItem.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenuItem);