import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingOverlayState from '../../enums/LoadingOverlay';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const propTypes = {
    loadingOverlayState: PropTypes.string.isRequired
};

const defaultProps = {
    onClick: () => {}
};

export class LoadingOverlay extends Component {

	render() {
        return (this.props.loadingOverlayState === LoadingOverlayState.None)
            ? null
            : (
                <div className={this.getClassName()}>
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

}

LoadingOverlay.propTypes = propTypes;
LoadingOverlay.defaultProps = defaultProps;

export default LoadingOverlay;