import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EmailListItem from '../EmailListItem/EmailListItem';

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

    showEmails() {
        return this.props.emails.map((email) => 
            <EmailListItem 
                email={email} 
                key={email.Id}
            />
        );
    }

}

function mapStateToProps(store, ownProps) {
    return {
        emails: store.email.emails
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