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
        const emailSentDate = this.props.email.EmailSentDateTime.toLocaleDateString();
		return (
            <li className="EmailListItem">
                <input type="checkbox" />
                <div className="EmailListItem__marker">&nbsp;&nbsp;</div>
                <div className="EmailListItem__email-info-container">
                    <div className="EmailListItem__sender-name">{this.props.email.FromName}</div>
                    <div className="EmailListItem__subject">{this.props.email.Subject}</div>
                    <div className="EmailListItem__preview">{this.props.email.Preview}</div>
                    <div className="EmailListItem__sent-date">{emailSentDate}</div>
                </div>
            </li>
		);
    }

}

function mapStateToProps(store, ownProps) {
    return {
        email: ownProps.email,
        isSmallScreen: store.app.isSmallScreen
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