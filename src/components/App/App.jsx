import React, { Component } from 'react';
import ComposeEmailButton from '../ComposeEmailButton/ComposeEmailButton';
import Drawer from '../Drawer/Drawer';
import EmailList from '../EmailList/EmailList';
import EMAIL_MANAGER from '../../managers/emailManager';
import Header from '../Header/Header';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';
import LoadingOverlayState from '../../enums/LoadingOverlay';
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {MdEdit} from 'react-icons/md';
import {setScreenSize} from '../../redux/actions/app-actions';
import { 
    loadEmails,
    setInboxListItemsActive 
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
        this.props.userLogin('s@gmail.com', 'p@$$w0rd');
    }

	render() {
		return (
            (this.props.isLoggedIn)
            ?   <div className="App">
                    {
                        (this.props.emailLoadingOverlayState === LoadingOverlayState.None)
                        ? null
                        : <LoadingOverlay loadingOverlayState={this.props.emailLoadingOverlayState} />
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
                                        isListActive={this.props.isInboxListActive} 
                                        emails={EMAIL_MANAGER.getInboxEmails(this.props.emails)}
                                        setListActive={this.props.setInboxListItemsActive} 
                                    />
                                } 
                            />
                            <Route 
                                exact path="/inbox"
                                render={(props) => 
                                    <EmailList 
                                        {...props} 
                                        isListActive={this.props.isInboxListActive} 
                                        emails={EMAIL_MANAGER.getInboxEmails(this.props.emails)}
                                        setListActive={this.props.setInboxListItemsActive} 
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
     * Gets a route path.
     * @param {string} path The route path.
     * @param {boolean} isListActive Indicates if the list items are active.
     * @param {func} setListActive Sets the active state of the list items.
     * @param {Email[]} emails The list of emails to show.
     * @param {boolean} exact Indicates if this is for the exact path.
     * @returns {Element} The Route component.
     */
    renderRoute(path, isListActive, emails, setListActive, exact = false) {

        return (exact)
            ?   <Route 
                    exact path={path}
                    render={(props) => 
                        <EmailList 
                            {...props} 
                            isListActive={isListActive} 
                            emails={emails}
                            setListActive={setListActive} 
                        />
                    } 
                />
            :   <Route 
                    path={path}
                    render={(props) => 
                        <EmailList 
                            {...props} 
                            isListActive={isListActive} 
                            emails={emails}
                            setListActive={setListActive} 
                        />
                    } 
                />
        
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
        isInboxListActive: store.email.isInboxListActive,
        isLoggedIn: store.user.isLoggedIn,
        isSmallScreen: store.app.isSmallScreen
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setScreenSize: setScreenSize,
        setInboxListItemsActive: setInboxListItemsActive,
        userLogin: userLogin
    },
    dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));