import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Email from '../../models/email';
import Touch from '../../models/touch';
import { updateCurrentSwipedEmails } from '../../redux/actions/email-actions';

const propTypes = {
    email: PropTypes.instanceOf(Email).isRequired,
    isSwipedOpen: PropTypes.bool
};

const defaultProps = {
    isSwipedOpen: false
};

const SWIPE_THRESHOLD = 1000;

export class EmailListItem extends Component {

    touchStart;
    touchEnd;
    
    constructor() {
        super();

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
    }

	render() {
        const emailSentDate = this.props.email.EmailSentDateTime.toLocaleDateString();
        const isSwipedOpen = this.props.isSwipedOpen;
		return (
            <li 
                className="EmailListItem"
                onTouchStart={this.handleTouchStart}
                onTouchEnd={this.handleTouchEnd}
            >
                <div
                    className={this.getEmailListItemClassNames()}
                    style={(isSwipedOpen) ? { 'right': '96px' } : { 'right': '0px'}}
                >
                    <input type="checkbox" />
                    <div className="EmailListItem__marker">&nbsp;&nbsp;</div>
                    <div className="EmailListItem__email-info-container">
                        <div className="EmailListItem__sender-name">{this.props.email.FromName}</div>
                        <div className="EmailListItem__subject">{this.props.email.Subject}</div>
                        <div className="EmailListItem__preview">{this.props.email.Preview}</div>
                        <div className="EmailListItem__sent-date">{emailSentDate}</div>
                    </div>
                </div>
                {
                    (isSwipedOpen)
                    ?   <div className="EmailListItem__options-inset-shadow"></div>
                    :   null
                }
            </li>
		);
    }

    /**
     * Gets the class name(s).
     * @returns {String} The class name(s).
     */
    getEmailListItemClassNames() {
        var className = 'EmailListItem__container';
        
        if (!this.props.email.Flags.IsUnread) {
            className += ' EmailListItem__container--read';
        }

        //if (this.props.isSwipedOpen) {
        //    className += ' EmailListItem--swiped-open';
        //}

        return className;
    }

    /**
     * Called when a touch action begins.
     * @param {object} e The event.
     */
    handleTouchStart(e) {
        let data = e.touches ? e.touches[0] : e;
        this.touchStart = new Touch(Date.now(), data.pageX, data.pageY);
    }

    /**
     * Called when a touch action ends.
     * @param {object} e The event.
     */
    handleTouchEnd(e) {
        let data = e.changedTouches ? e.changedTouches[0] : e;
        this.touchEnd = new Touch(Date.now(), data.pageX, data.pageY);
        this.checkIfSwiped();
    }

    /**
     * Checks to see if a swipe action occurred on this email list item.
     */
    checkIfSwiped() {

        if (this.touchStart 
            && this.touchEnd
            && this.touchEnd.Time - this.touchStart.Time <= SWIPE_THRESHOLD
            && Math.abs(this.touchStart.Y - this.touchEnd.Y) < 50) {

            if (this.touchStart.X - this.touchEnd.X >= 60) {
                // swiped left
                this.props.updateCurrentSwipedEmails(this.props.email, true);
            } else if (this.touchEnd.X - this.touchStart.X >= 60) {
                // swiped right
                this.props.updateCurrentSwipedEmails(this.props.email, false);
            }
        }

    }

}

function mapStateToProps(store, ownProps) {
    return {
        email: ownProps.email,
        isSwipedOpen: ownProps.isSwipedOpen,
        isSmallScreen: store.app.isSmallScreen
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateCurrentSwipedEmails: updateCurrentSwipedEmails
    },
    dispatch);
}

EmailListItem.propTypes = propTypes;
EmailListItem.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmailListItem);