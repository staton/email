import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HeaderButton from '../HeaderButton/HeaderButton';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { 
    MdArrowBack, 
    MdDelete  } 
from 'react-icons/md';
import { 
    selectEmail,
    setInboxListItemsActive 
} from '../../redux/actions/email-actions';

const propTypes = {
    leftElementGroupClassName: PropTypes.string.isRequired,
    rightElementGroupClassName: PropTypes.string.isRequired,
    elementClassName: PropTypes.string.isRequired
};

const defaultProps = {
};

export class ListSelectionHeader extends Component {

    constructor() {
        super();

        this.handleBackButtonClicked = this.handleBackButtonClicked.bind(this);
        this.handleDeleteButtonClicked = this.handleDeleteButtonClicked.bind(this);
    }

	render() {
        const backButtonId = 'ListSelectionHeader__back-button';
        const deleteButtonId = 'ListSelectionHeader__delete-button';

		return (
			<header className="ListSelectionHeader">
                <div className={this.props.leftElementGroupClassName}>
                    <div className={this.props.elementClassName}>
                        <HeaderButton
                            content={<MdArrowBack />}
                            id={backButtonId}
                            onClick={this.handleBackButtonClicked} 
                        />
                    </div>
                </div>
                <div className={this.props.rightElementGroupClassName}>
                    <div className={this.props.elementClassName}>
                        <HeaderButton
                            content={<MdDelete />}
                            enabled={this.props.selectedEmails.length > 0}
                            id={deleteButtonId}
                            onClick={this.handleDeleteButtonClicked} 
                        />
                    </div>
                </div>
			</header>
		);
    }

    /**
     * Called when the user clicks the back button.
     * @param {object} e The event.
     */
    handleBackButtonClicked(e) {
        this.props.selectEmail([], false);
        this.props.setInboxListItemsActive(false);
    }

    /**
     * Called when the user clicks the delete button.
     * @param {object} e The event.
     */
    handleDeleteButtonClicked(e) {
        console.log('delete clicked');
    }

}

ListSelectionHeader.propTypes = propTypes;
ListSelectionHeader.defaultProps = defaultProps;

function mapStateToProps(store, ownProps) {
    return {
        selectedEmails: store.email.selectedEmails
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectEmail: selectEmail,
        setInboxListItemsActive: setInboxListItemsActive
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListSelectionHeader);