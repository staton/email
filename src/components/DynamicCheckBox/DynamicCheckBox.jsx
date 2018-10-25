import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MdCheck} from 'react-icons/md';
import BackgroundColor from '../../enums/backgroundColor';

const propTypes = {
    active: PropTypes.bool,
    backgroundColor: PropTypes.string,
    content: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    onClick: PropTypes.func
};

const defaultProps = {
    active: false,
    backgroundColor: BackgroundColor.Gray,
    content: null,
    isChecked: false,
    onClick: () => {}
};

class DynamicCheckBox extends Component {

    constructor() {
        super();

        this.handleClicked = this.handleClicked.bind(this);
    }

	render() {
		return (
            <div 
                className="DynamicCheckBox"
                onClick={this.handleClicked}
            >
                <div 
                    className={this.getContainerClassName()}
                    style={{backgroundColor: this.props.backgroundColor}}
                >
                    <span className="DynamicCheckBox__check">
                        {
                            (this.props.isChecked)
                            ?   <MdCheck />
                            :   null
                        }
                    </span>
                    <span className="DynamicCheckBox__letter">{this.props.content}</span>
                </div>
            </div>
		);
    }

    /**
     * Gets the class name(s) for the inner container.
     * @returns {string} The class name(s).
     */
    getContainerClassName() {
        let className = 'DynamicCheckBox__container';

        if (this.props.isChecked)
            className += ' DynamicCheckBox--checked';

        if (this.props.active)
            className += ' DynamicCheckBox--active';

        return className;
    }

    /**
     * Called when the checkbox is clicked.
     * @param {object} e The event.
     */
    handleClicked(e) {
        if (this.props.active) {
            e.preventDefault();
            e.stopPropagation();
            this.props.onClick();
        }
    }

}

DynamicCheckBox.propTypes = propTypes;
DynamicCheckBox.defaultProps = defaultProps;

export default DynamicCheckBox;