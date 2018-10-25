import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import EmailListItem from '../EmailListItem/EmailListItem';
import EMAIL_MANAGER from '../../managers/emailManager';

const propTypes = {
    isListActive: PropTypes.bool.isRequired,
    setListActive: PropTypes.func.isRequired
};

const defaultProps = {
};

export class EmailList extends Component {

    constructor() {
        super();

        this.handleListActivated = this.handleListActivated.bind(this);
    }

	render() {
		return (
            <ul className="EmailList">
                {
                    this.props.emails.map((email) => 
                        <EmailListItem 
                            email={email}
                            isListActive={this.props.isListActive}
                            isSelected={this.isEmailSelected(email)}
                            isSwipedOpen={this.isEmailSwipedOpen(email)}
                            key={email.Id}
                            setListActive={this.handleListActivated}
                        />)
                }
            </ul>
		);
    }

    /**
     * Sets the list's active state.
     * @param {bool} isActive Indicates if the list is active or not.
     */
    handleListActivated(isActive) {
        this.props.setListActive(isActive);
    }

    /**
     * Checks if an email is selected or not.
     * @param {Email} email The email to check whether it is selected open or not.
     * @returns {boolean} True if it is selected, false otherwise.
     */
    isEmailSelected(email) {
        return EMAIL_MANAGER.isEmailInArray(this.props.selectedEmails, email);
    }

    /**
     * Checks if an email is in the 'swiped open' state or not.
     * @param {Email} email The email to check whether it is swiped open or not.
     * @returns {boolean} True if it is swiped open, false otherwise.
     */
    isEmailSwipedOpen(email) {
        return EMAIL_MANAGER.isEmailInArray(this.props.currentSwipedEmails, email);
    }

}

function mapStateToProps(store, ownProps) {
    return {
        currentSwipedEmails: store.email.currentSwipedEmails,
        emails: store.email.emails,
        isListActive: ownProps.isListActive,
        selectedEmails: store.email.selectedEmails,
        setListActive: ownProps.setListActive
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