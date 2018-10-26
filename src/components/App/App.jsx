import React, { Component } from 'react';
import ComposeEmailButton from '../ComposeEmailButton/ComposeEmailButton';
import Drawer from '../Drawer/Drawer';
import EmailList from '../EmailList/EmailList';
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

export class App extends Component {

    constructor() {
        super();

        this.handleResized = this.handleResized.bind(this);
    }

    componentDidMount() {
        // listen for window resize events:
        window.addEventListener('resize', this.handleResized);

        // load the initial emails:
        this.props.loadEmails();
    }

	render() {
		return (
			<div className="App">
				<Header />
                <div className="App__content">
                    <Drawer />
                    {
                        (this.props.emailLoadingOverlayState === LoadingOverlayState.None)
                        ? null
                        : <LoadingOverlay loadingOverlayState={this.props.emailLoadingOverlayState} />
                    }
                    <Switch>
                        {this.getRoute('/', this.props.isInboxListActive, this.props.setInboxListItemsActive, true)}
                        {this.getRoute('/inbox', this.props.isInboxListActive, this.props.setInboxListItemsActive)}
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
		);
    }

    /**
     * Gets a route path.
     * @param {string} path The route path.
     * @param {boolean} isListActive Indicates if the list items are active.
     * @param {func} setListActive Sets the active state of the list items.
     * @param {boolean} exact Indicates if this is for the exact path.
     * @returns {Element} The Route component.
     */
    getRoute(path, isListActive, setListActive, exact = false) {

        return (exact)
            ?   <Route 
                    exact path={path}
                    render={(props) => 
                        <EmailList 
                            {...props} 
                            isListActive={isListActive} 
                            setListActive={setListActive} />
                    } 
                />
            :   <Route 
                    path={path}
                    render={(props) => 
                        <EmailList 
                            {...props} 
                            isListActive={isListActive} 
                            setListActive={setListActive} />
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
        isInboxListActive: store.email.isInboxListActive,
        isSmallScreen: store.app.isSmallScreen
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadEmails: loadEmails,
        setScreenSize: setScreenSize,
        setInboxListItemsActive: setInboxListItemsActive
    },
    dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));