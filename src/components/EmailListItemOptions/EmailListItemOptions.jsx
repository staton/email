import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import _ from 'lodash';
import Email from '../../models/email';
import EmailListItemOptionsButton from '../EmailListItemOptionsButton/EmailListItemOptionsButton';
import {MdDelete, MdFlag, MdMoreHoriz} from 'react-icons/md'

const propTypes = {
    email: PropTypes.instanceOf(Email).isRequired
};

const defaultProps = {
};

export class EmailListItemOptions extends Component {

    constructor() {
        super();

        this.handleDeleteButtonClicked = this.handleDeleteButtonClicked.bind(this);
        this.handleFlagButtonClicked = this.handleFlagButtonClicked.bind(this);
        this.handleMoreButtonClicked = this.handleMoreButtonClicked.bind(this);
    }

	render() {
		return (
            <div className="EmailListItemOptions">
                <EmailListItemOptionsButton 
                    className="EmailListItemOptionsButton__more"
                    content={<MdMoreHoriz />} 
                    onClick={this.handleMoreButtonClicked}
                />
                <EmailListItemOptionsButton 
                    className="EmailListItemOptionsButton__flag"
                    content={<MdFlag />} 
                    onClick={this.handleFlagButtonClicked}
                />
                <EmailListItemOptionsButton 
                    className="EmailListItemOptionsButton__delete"
                    content={<MdDelete />} 
                    onClick={this.handleDeleteButtonClicked}
                />
            </div>
		);
    }

    /**
     * Called when the user taps the Delete button.
     * @param {object} e The event.
     */
    handleDeleteButtonClicked(e) {
        console.log('DELETE clicked');
    }

    /**
     * Called when the user taps the Flag button.
     * @param {object} e The event.
     */
    handleFlagButtonClicked(e) {
        console.log('FLAG clicked');
    }

    /**
     * Called when the user taps the More button.
     * @param {object} e The event.
     */
    handleMoreButtonClicked(e) {
        console.log('MORE clicked');
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

EmailListItemOptions.propTypes = propTypes;
EmailListItemOptions.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmailListItemOptions);