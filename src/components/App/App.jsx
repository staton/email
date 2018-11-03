import React, { Component } from 'react';
import ComposeEmailButton from '../ComposeEmailButton/ComposeEmailButton';
import Drawer from '../Drawer/Drawer';
import EmailList from '../EmailList/EmailList';
import EMAIL_MANAGER from '../../managers/emailManager';
import Header from '../Header/Header';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';
import LoadingOverlayState from '../../enums/LoadingOverlay';
import STRINGS from '../../resources/strings';
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {MdEdit} from 'react-icons/md';
import {EMAIL_LOADING_OVERLAY_FADE_SPEED} from '../../resources/constants';
import {setScreenSize} from '../../redux/actions/app-actions';
import { 
    setDraftListItemsActive,
    setInboxListItemsActive,
    setSentListItemsActive,
    setSpamListItemsActive,
    setTrashListItemsActive
} from '../../redux/actions/email-actions';
import {
    userLogin
} from '../../redux/actions/user-actions';

export class App extends Component {

    constructor() {
        super();

        this.handleResized = this.handleResized.bind(this);
    }

    componentDidMount() {
        // listen for window resize events:
        window.addEventListener('resize', this.handleResized);

        // load the initial emails:
        this.props.userLogin('s@gmail.com', 'p@$$w0rd', EMAIL_LOADING_OVERLAY_FADE_SPEED);
    }

	render() {
        let emailListId = 0;
		return (
            (this.props.isLoggedIn)
            ?   <div className="App">
                    {
                        (this.props.emailLoadingOverlayState === LoadingOverlayState.None)
                        ? null
                        : <LoadingOverlay 
                            fadeOutSpeed={EMAIL_LOADING_OVERLAY_FADE_SPEED}
                            loadingOverlayState={this.props.emailLoadingOverlayState}
                         />
                    }
                    <Header />
                    <div className="App__content">
                        <Drawer />
                        <Switch>
                            <Route 
                                exact path="/"
                                render={(props) => 
                                    <EmailList 
                                        {...props} 
                                        emails={EMAIL_MANAGER.getInboxEmails(this.props.emails)}
                                        isListActive={this.props.isInboxListActive} 
                                        setListActive={this.props.setInboxListItemsActive} 
                                        title={STRINGS.InboxMenu}
                                    />
                                } 
                            />
                            <Route 
                                path="/inbox"
                                render={(props) => 
                                    <EmailList 
                                        {...props} 
                                        emails={EMAIL_MANAGER.getInboxEmails(this.props.emails)}
                                        isListActive={this.props.isInboxListActive} 
                                        setListActive={this.props.setInboxListItemsActive} 
                                        title={STRINGS.InboxMenu}
                                    />
                                } 
                            />
                            <Route 
                                path="/drafts"
                                render={(props) => 
                                    <EmailList 
                                        {...props} 
                                        emails={EMAIL_MANAGER.getDraftEmails(this.props.emails, this.props.user.Email)}
                                        isListActive={this.props.isDraftListActive} 
                                        setListActive={this.props.setDraftListItemsActive} 
                                        title={STRINGS.DraftsMenu}
                                    />
                                } 
                            />
                            <Route 
                                path="/sent"
                                render={(props) => 
                                    <EmailList 
                                        {...props} 
                                        emails={EMAIL_MANAGER.getSentEmails(this.props.emails, this.props.user.Email)}
                                        isListActive={this.props.isSentListActive} 
                                        setListActive={this.props.setSentListItemsActive} 
                                        title={STRINGS.SentMenu}
                                    />
                                } 
                            />
                            <Route 
                                path="/spam"
                                render={(props) => 
                                    <EmailList 
                                        {...props} 
                                        emails={EMAIL_MANAGER.getSpamEmails(this.props.emails)}
                                        isListActive={this.props.isSpamListActive} 
                                        setListActive={this.props.setSpamListItemsActive} 
                                        title={STRINGS.SpamMenu}
                                    />
                                } 
                            />
                            <Route 
                                path="/trash"
                                render={(props) => 
                                    <EmailList 
                                        {...props} 
                                        emails={EMAIL_MANAGER.getTrashEmails(this.props.emails)}
                                        isListActive={this.props.isTrashListActive} 
                                        setListActive={this.props.setTrashListItemsActive} 
                                        title={STRINGS.DeletedMenu}
                                    />
                                } 
                            />
                            <Route render={() => <div>not found...</div>} />
                        </Switch>
                    </div>
                    {
                        // For small screens, the New Email button will be a FAB.
                        // For larger screens, it will be in the drawer.
                        (this.props.isSmallScreen)
                        ?   <ComposeEmailButton icon={<MdEdit />} />
                        :   null
                    }
                </div>
            :   <div className="App">Logging in, please wait...</div>
		);
    }
    
    /**
     * Called when the window resizes.
     * @param {object} e The event.
     */
    handleResized(e) {
        this.props.setScreenSize(window.innerWidth, window.innerHeight);
    }

}

function mapStateToProps(store, ownProps) {
    return {
        emailLoadingOverlayState: store.email.loadingOverlayState,
        emails: store.email.emails,
        isDraftListActive: store.email.isDraftListActive,
        isInboxListActive: store.email.isInboxListActive,
        isSentListActive: store.email.isSentListActive,
        isSpamListActive: store.email.isSpamListActive,
        isTrashListActive: store.email.isTrashListActive,
        isLoggedIn: store.user.isLoggedIn,
        isSmallScreen: store.app.isSmallScreen,
        user: store.user.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setScreenSize: setScreenSize,
        setDraftListItemsActive: setDraftListItemsActive,
        setInboxListItemsActive: setInboxListItemsActive,
        setSentListItemsActive: setSentListItemsActive,
        setSpamListItemsActive: setSpamListItemsActive,
        setTrashListItemsActive: setTrashListItemsActive,
        userLogin: userLogin
    },
    dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));