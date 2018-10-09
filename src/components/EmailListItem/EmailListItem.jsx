import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Email from '../../models/email';

const propTypes = {
    email: PropTypes.instanceOf(Email).isRequired
};

const defaultProps = {
};

export class EmailListItem extends Component {

	render() {
		return (
            <li className="EmailListItem">
            {this.props.email.Subject}
            </li>
		);
    }

}

function mapStateToProps(store, ownProps) {
    return {
        email: ownProps.email
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    },
    dispatch);
}

EmailListItem.propTypes = propTypes;
EmailListItem.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmailListItem);