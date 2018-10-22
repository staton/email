import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EmailListItem from '../EmailListItem/EmailListItem';
import _ from 'lodash';

const propTypes = {
};

const defaultProps = {
};

export class EmailList extends Component {

	render() {
		return (
            <ul className="EmailList">{this.showEmails()}</ul>
		);
    }

    /**
     * Shows the list of emails.
     */
    showEmails() {
        return this.props.emails.map((email) => 
            <EmailListItem 
                email={email} 
                isSwipedOpen={this.isEmailSwipedOpen(email)}
                key={email.Id}
            />
        );
    }

    /**
     * Checks if an email is in the 'swiped open' state or not.
     * @param {Email} email The email to check whether it is swiped open or not.
     * @returns {boolean} True if it is swiped open, false otherwise.
     */
    isEmailSwipedOpen(email) {
        let isEmailSwipedOpen = _.head(_.filter(this.props.currentSwipedEmails, (o) => o.Id === email.Id)) !== undefined;
        return isEmailSwipedOpen;
    }

}

function mapStateToProps(store, ownProps) {
    return {
        emails: store.email.emails,
        currentSwipedEmails: store.email.currentSwipedEmails
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    },
    dispatch);
}

EmailList.propTypes = propTypes;
EmailList.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmailList);