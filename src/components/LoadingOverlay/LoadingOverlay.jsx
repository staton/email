import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingOverlayState from '../../enums/LoadingOverlay';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const propTypes = {
    fadeOutSpeed: PropTypes.number,
    loadingOverlayState: PropTypes.string.isRequired
};

const defaultProps = {
    fadeOutSpeed: 1000
};

export class LoadingOverlay extends Component {

	render() {
        return (this.props.loadingOverlayState === LoadingOverlayState.None)
            ? null
            : (
                <div 
                    className={this.getClassName()}
                    style={this.getStyle()}
                >
                    <LoadingSpinner />
                </div>
            );
    }

    /**
     * Gets the class name(s) for this component.
     * @returns {string} The class name(s).
     */
    getClassName() {
        let className = 'LoadingOverlay';

        if (this.props.loadingOverlayState === LoadingOverlayState.Fading)
            className += ' LoadingOverlay--fade';
        
        return className;
    }

    /**
     * Gets the inline style for this component.
     * @returns {object} The style object.
     */
    getStyle() {
        let transition = 'all ' + this.props.fadeOutSpeed + 'ms ease-in';

        return {
            msTransition: transition,
            WebkitTransition: transition,
            transition: transition
        };

        /*return (this.props.loadingOverlayState === LoadingOverlayState.Fading)
            ? {
                msTransition: transition,
                WebkitTransition: transition,
                transition: transition,
                opacity: '0.0'
            }
            : {
                msTransition: transition,
                WebkitTransition: transition,
                transition: transition
            };*/
    }

}

LoadingOverlay.propTypes = propTypes;
LoadingOverlay.defaultProps = defaultProps;

export default LoadingOverlay;