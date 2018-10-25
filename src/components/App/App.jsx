import React, { Component } from 'react';
import ComposeEmailButton from '../ComposeEmailButton/ComposeEmailButton';
import Drawer from '../Drawer/Drawer';
import EmailList from '../EmailList/EmailList';
import Header from '../Header/Header';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';
import LoadingOverlayState from '../../enums/LoadingOverlay';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdEdit } from 'react-icons/md';
import { setScreenSize } from '../../redux/actions/app-actions';
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
                    <EmailList 
                        isListActive={this.props.isInboxListActive}
                        setListActive={this.props.setInboxListItemsActive}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);