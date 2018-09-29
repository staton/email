import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    zIndex: PropTypes.number.isRequired
};

const defaultProps = {
    onClick: () => {}
};

export class ScreenOverlay extends Component {

	render() {
		return (
            <div 
                className={this.getClassNames()}
                onClick={this.props.onClick}
                style={{ zIndex: this.props.zIndex }}
            >
            </div>
        );
    }

    getClassNames() {
        const screenOverlayClassName = 'ScreenOverlay';
        const screenOverlayHiddenClassNames = screenOverlayClassName + ' ScreenOverlay--hidden';

        return (this.props.isVisible)
            ? screenOverlayClassName
            : screenOverlayHiddenClassNames;
    }

}

ScreenOverlay.propTypes = propTypes;
ScreenOverlay.defaultProps = defaultProps;

export default ScreenOverlay;