import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const propTypes = {
    badge: PropTypes.number,
    icon: PropTypes.element,
    onClick: PropTypes.func,
    primaryContent: PropTypes.any.isRequired,
    secondaryContent: PropTypes.any,
    title: PropTypes.string
};

const defaultProps = {
    badge: null,
    icon: null,
    onClick: () => {},
    secondaryContent: null,
    title: ''
};

export class DrawerMenuListItem extends Component {

	render() {
		return (
            <li 
                className="DrawerMenuListItem"
                title={this.props.title}>
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
            </li>
		);
    }

}

function mapStateToProps(store, ownProps) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    },
    dispatch);
}

DrawerMenuListItem.propTypes = propTypes;
DrawerMenuListItem.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenuListItem);