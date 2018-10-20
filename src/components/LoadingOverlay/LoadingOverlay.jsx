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
                <div className={this.getClassNames()}>
                    <LoadingSpinner />
                </div>
            );
    }

    getClassNames() {
        const loadingOverlayClassName = 'LoadingOverlay';
        const loadingOverlayFadeClassNames = loadingOverlayClassName + ' LoadingOverlay--fade';

        switch (this.props.loadingOverlayState) {
            case LoadingOverlayState.Fading:
                return loadingOverlayFadeClassNames;
            default:
                return loadingOverlayClassName;
        }
    }

}

LoadingOverlay.propTypes = propTypes;
LoadingOverlay.defaultProps = defaultProps;

export default LoadingOverlay;