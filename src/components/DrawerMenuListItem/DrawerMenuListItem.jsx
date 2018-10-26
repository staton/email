import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {setDrawerVisibility} from '../../redux/actions/app-actions';

const propTypes = {
    badge: PropTypes.number,
    linkTo: PropTypes.string,
    icon: PropTypes.element,
    onClick: PropTypes.func,
    primaryContent: PropTypes.any.isRequired,
    secondaryContent: PropTypes.any,
    title: PropTypes.string
};

const defaultProps = {
    badge: null,
    linkTo: '/',
    icon: null,
    onClick: () => {},
    secondaryContent: null,
    title: ''
};

export class DrawerMenuListItem extends Component {

    constructor() {
        super();

        this.handleClicked = this.handleClicked.bind(this);
    }

	render() {
		return (
            <li 
                className="DrawerMenuListItem"
                onClick={this.handleClicked}
                title={this.props.title}>
                <Link to={this.props.linkTo}>
                    <div className="DrawerMenuListItem__container">
                        <div className="DrawerMenuListItem__left-container">
                            <div className="DrawerMenuListItem__icon">
                            {this.props.icon}
                            </div>
                            <div className="DrawerMenuListItem__content">
                                <div className="DrawerMenuListItem__primary-content">
                                {this.props.primaryContent}
                                </div>
                                {
                                    (this.props.secondaryContent)
                                    ?   <div className="DrawerMenuListItem__secondary-content">
                                        {this.props.secondaryContent}
                                        </div>
                                    :   null
                                }
                            </div>
                        </div>
                        {
                            (this.props.badge)
                            ?   <div className="DrawerMenuListItem__badge">
                                    <span>{this.props.badge}</span>
                                </div>
                            :   null
                        }
                    </div>
                </Link>
            </li>
		);
    }

    /**
     * Called when the drawer menu list item is clicked.
     * @param {object} e The event.
     */
    handleClicked(e) {
        // For small screen devices, hide the drawer after clicking on a link:
        if (this.props.isSmallScreen) {
            this.props.setDrawerVisibility(false);
        }
    }
}

function mapStateToProps(store, ownProps) {
    return {
        isSmallScreen: store.app.isSmallScreen
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setDrawerVisibility: setDrawerVisibility
    },
    dispatch);
}

DrawerMenuListItem.propTypes = propTypes;
DrawerMenuListItem.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenuListItem);