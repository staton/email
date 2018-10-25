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
import GESTURE_MANAGER from '../../managers/gestureManager';
import {
    selectEmail,
    updateCurrentSwipedEmails
} from '../../redux/actions/email-actions';


const propTypes = {
    email: PropTypes.instanceOf(Email).isRequired,
    isSelected: PropTypes.bool,
    isSwipedOpen: PropTypes.bool
};

const defaultProps = {
    isSelected: false,
    isSwipedOpen: false
};

export class EmailListItem extends Component {

    constructor() {
        super();

        this.handleCheckBoxClicked = this.handleCheckBoxClicked.bind(this);
        this.handleTouchEnded = this.handleTouchEnded.bind(this);
        this.handleTouchMoved = this.handleTouchMoved.bind(this);
        this.handleTouchStarted = this.handleTouchStarted.bind(this);
    }

	render() {
        const emailSentDate = this.props.email.EmailSentDateTime.toLocaleDateString();

		return (
            <li 
                className="EmailListItem"
                onTouchEnd={this.handleTouchEnded}
                onTouchMove={this.handleTouchMoved}
                onTouchStart={this.handleTouchStarted}
            >
                <div className={this.getEmailListItemClassNames()}>
                    <div className="EmailListItem__checkbox-container">
                    {
                        (this.props.isSmallScreen)
                        ?   <DynamicCheckBox 
                                backgroundColor={this.props.email.Color}
                                content={this.props.email.FirstLetter}
                                isChecked={this.props.isSelected}
                                onClick={this.handleCheckBoxClicked}
                            />
                        :   <CheckBox
                                isChecked={this.props.isSelected}
                                onClick={this.handleCheckBoxClicked}
                            />
                    }
                    </div>
                    {
                        // Show flag here for large displays
                        (!this.props.isSmallScreen) 
                        ?   <EmailListItemIcon 
                                content={<MdFlag />} 
                                isVisible={this.props.email.Flags.IsImportant}
                            />
                        : null
                    }
                    <div className="EmailListItem__email-info-container">
                        {
                            // Show flag here for small displays
                            (this.props.isSmallScreen) 
                            ?   <EmailListItemIcon 
                                    content={<MdFlag />} 
                                    isVisible={this.props.email.Flags.IsImportant}
                                />
                            : null
                        }
                        <div className="EmailListItem__sender-name">{this.props.email.FromName}</div>
                        <div className="EmailListItem__subject">{this.props.email.Subject}</div>
                        <div className="EmailListItem__preview">{this.props.email.Preview}</div>
                        <div className="EmailListItem__sent-date">{emailSentDate}</div>
                    </div>
                </div>
                {(this.props.isSmallScreen) ? <EmailListItemOptions email={this.props.email} /> : null}
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
     * Called when the user taps the checkbox.
     * @param {object} e The event.
     */
    handleCheckBoxClicked(e) {
        this.props.selectEmail(this.props.email, !this.props.isSelected);
    }

    /**
     * Called when a long press occurs.
     */
    handleLongPressed() {
        alert('long pressed!');
    }

    /**
     * Called when a touch action ends.
     * @param {object} e The event.
     */
    handleTouchEnded(e) {
        GESTURE_MANAGER.handleTouchEnded(e);
        GESTURE_MANAGER.checkForSwipe(
            () => this.props.updateCurrentSwipedEmails(this.props.email, true),
            () => this.props.updateCurrentSwipedEmails(this.props.email, false)
        );
    }

    /**
     * Called when a touch action begins.
     * @param {object} e The event.
     */
    handleTouchMoved(e) {
        GESTURE_MANAGER.handleTouchMoved(e);
    }

    /**
     * Called when a touch action begins.
     * @param {object} e The event.
     */
    handleTouchStarted(e) {
        let id = GESTURE_MANAGER.handleTouchStarted(e);
        GESTURE_MANAGER.startLongPressTimer(id, this.handleLongPressed);
    }

}

function mapStateToProps(store, ownProps) {
    return {
        email: ownProps.email,
        isSelected: ownProps.isSelected,
        isSmallScreen: store.app.isSmallScreen,
        isSwipedOpen: ownProps.isSwipedOpen
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