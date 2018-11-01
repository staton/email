import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {MdFlag} from 'react-icons/md';
import CheckBox from '../CheckBox/CheckBox';
import DynamicCheckBox from '../DynamicCheckBox/DynamicCheckBox';
import Email from '../../models/email';
import EmailListItemIcon from '../EmailListItemIcon/EmailListItemIcon';
import EmailListItemOptions from '../EmailListItemOptions/EmailListItemOptions';
import EMAIL_MANAGER from '../../managers/emailManager';
import GESTURE_MANAGER from '../../managers/gestureManager';
import STRINGS from '../../resources/strings';
import {
    selectEmail,
    updateCurrentSwipedEmails
} from '../../redux/actions/email-actions';


const propTypes = {
    email: PropTypes.instanceOf(Email).isRequired,
    isListActive: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool,
    isSwipedOpen: PropTypes.bool,
    setListActive: PropTypes.func.isRequired
};

const defaultProps = {
    isSelected: false,
    isSwipedOpen: false
};

export class EmailListItem extends Component {

    constructor() {
        super();

        this.handleCheckBoxClicked = this.handleCheckBoxClicked.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
        this.handleLongPressed = this.handleLongPressed.bind(this);
        this.handleTouchEnded = this.handleTouchEnded.bind(this);
        this.handleTouchMoved = this.handleTouchMoved.bind(this);
        this.handleTouchStarted = this.handleTouchStarted.bind(this);
    }

	render() {
        const isValid =  this.props.email && this.props.user;

        if (!isValid) 
            return (<li className="EmailListItem"></li>);

        const emailSentDate = this.props.email.EmailSentDateTime.toLocaleDateString();
        const senderName = this.getFromName();
        
		return (
            <li 
                className="EmailListItem"
                onClick={this.handleClicked}
                onTouchEnd={this.handleTouchEnded}
                onTouchMove={this.handleTouchMoved}
                onTouchStart={this.handleTouchStarted}
            >
                <div className={this.getEmailListItemClassNames()}>
                    <div className="EmailListItem__checkbox-container">
                    {this.getCheckBox(senderName)}
                    </div>
                    {(!this.props.isSmallScreen) ? this.getFlagIcon() : null}
                    <div className="EmailListItem__email-info-container">
                        {(this.props.isSmallScreen) ? this.getFlagIcon() : null}
                        <div className="EmailListItem__sender-name">{senderName}</div>
                        <div className="EmailListItem__subject">{this.getSubject()}</div>
                        <div className="EmailListItem__preview">{this.getPreview()}</div>
                        <div className="EmailListItem__sent-date">{emailSentDate}</div>
                    </div>
                </div>
                {(this.props.isSmallScreen) ? <EmailListItemOptions email={this.props.email} /> : null}
            </li>
		);
    }

    /**
     * Gets the checkbox for this list item.
     * @param {string} senderName The sender name of the email.
     * @returns {Element} The checkbox.
     */
    getCheckBox(senderName) {
        return (
            (this.props.isSmallScreen)
            ?   <DynamicCheckBox 
                    isActive={this.props.isListActive}
                    backgroundColor={this.props.email.Color}
                    content={EMAIL_MANAGER.getDynamicCheckBoxLetter(senderName)}
                    isChecked={this.props.isSelected}
                    onClick={this.handleCheckBoxClicked}
                />
            :   <CheckBox
                    isChecked={this.props.isSelected}
                    onClick={this.handleCheckBoxClicked}
                />
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

        if (this.props.isSwipedOpen) {
            className += ' EmailListItem__container--swiped-open';
        }

        return className;
    }

    /**
     * Gets the flag icon, indicating this is an important email.
     * @returns {Element} The flag icon.
     */
    getFlag() {
        return (
            <EmailListItemIcon 
                content={<MdFlag />} 
                isVisible={this.props.email.Flags.IsImportant}
            />
        );
    }

    /**
     * Gets the flag icon for this list item.
     * @returns {Element} The flag icon.
     */
    getFlagIcon() {
        return (
            <EmailListItemIcon 
                content={<MdFlag />} 
                isVisible={this.props.email.Flags.IsImportant}
            />
        );
    }

    /**
     * Gets email sender's name.
     * @returns {string} The email sender's name.
     */
    getFromName() {
        if (this.props.email.ToEmails[0].toLowerCase() === this.props.user.Email.toLowerCase()) {
            // received email
            return this.props.email.FromName ? this.props.email.FromName : this.props.email.FromEmail;
        } else  {
            // sent email
            return this.props.email.ToNames[0] ? this.props.email.ToNames[0]: this.props.email.ToEmails[0];
        }
    }

    /**
     * Gets the email preview. If empty, will return 'preview not available'.
     * @returns {string} The preview of the email.
     */
    getPreview() {
        return this.props.email.Preview ? this.props.email.Preview : STRINGS.PreviewNotAvailable;
    }

    /**
     * Gets the email subject. If empty, will return 'untitled'.
     * @returns {string} The subject of the email.
     */
    getSubject() {
        return this.props.email.Subject ? this.props.email.Subject : STRINGS.Untitled;
    }

    /**
     * Called when the user taps the checkbox.
     * @param {object} e The event.
     */
    handleCheckBoxClicked(e) {
        this.props.selectEmail([this.props.email], !this.props.isSelected);
    }

    /**
     * Called when the user clicks the list item.
     * @param {object} e The event.
     */
    handleClicked(e) {
        console.log('clicked EmailListItem!');
    }

    /**
     * Called when a long press occurs.
     */
    handleLongPressed() {
        if (!this.props.isSmallScreen)
            return;
            
        if (this.props.currentSwipedEmails.length > 0) {
            // automatically reset any currently swiped emails:
            this.props.updateCurrentSwipedEmails(this.props.currentSwipedEmails, false);
        }
        
        this.props.setListActive(true);
        this.props.selectEmail([this.props.email], true);
    }

    /**
     * Called when a touch action ends.
     * @param {object} e The event.
     */
    handleTouchEnded(e) {
        if (!this.props.isSmallScreen || this.props.isListActive)
            return;
            
        GESTURE_MANAGER.handleTouchEnded(e);
        GESTURE_MANAGER.checkForSwipe(
            () => this.props.updateCurrentSwipedEmails([this.props.email], true),
            () => this.props.updateCurrentSwipedEmails([this.props.email], false)
        );
    }

    /**
     * Called when a touch action begins.
     * @param {object} e The event.
     */
    handleTouchMoved(e) {
        if (!this.props.isSmallScreen || this.props.isListActive)
            return;

        GESTURE_MANAGER.handleTouchMoved(e);
    }

    /**
     * Called when a touch action begins.
     * @param {object} e The event.
     */
    handleTouchStarted(e) {
        if (!this.props.isSmallScreen || this.props.isListActive)
            return;

        let id = GESTURE_MANAGER.handleTouchStarted(e);
        GESTURE_MANAGER.startLongPressTimer(id, this.handleLongPressed);
    }

}

function mapStateToProps(store, ownProps) {
    return {
        currentSwipedEmails: store.email.currentSwipedEmails,
        email: ownProps.email,
        isListActive: ownProps.isListActive,
        isSelected: ownProps.isSelected,
        isSmallScreen: store.app.isSmallScreen,
        isSwipedOpen: ownProps.isSwipedOpen,
        selectEmail: store.email.selectEmail,
        setListActive: ownProps.setListActive,
        user: store.user.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectEmail: selectEmail,
        updateCurrentSwipedEmails: updateCurrentSwipedEmails
    },
    dispatch);
}

EmailListItem.propTypes = propTypes;
EmailListItem.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmailListItem);