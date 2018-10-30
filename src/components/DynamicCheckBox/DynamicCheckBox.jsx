import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MdCheck} from 'react-icons/md';
import BackgroundColor from '../../enums/backgroundColor';

const propTypes = {
    backgroundColor: PropTypes.string,
    content: PropTypes.string,
    isActive: PropTypes.bool,
    isChecked: PropTypes.bool,
    onClick: PropTypes.func
};

const defaultProps = {
    backgroundColor: BackgroundColor.Gray,
    content: '',
    isActive: false,
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
                <div className={this.getContainerClassName()}>
                    <div 
                        className="DynamicCheckBox__letter card__front"
                        style={{backgroundColor: this.props.backgroundColor}}
                    >
                        {this.props.content}
                    </div>
                    <div className={this.getCheckBoxClassName()}>
                        {
                            (this.props.isChecked)
                            ?   <MdCheck />
                            :   null
                        }
                    </div>
                </div>
            </div>
		);
    }

    getCheckBoxClassName() {
        let className = 'DynamicCheckBox__check card__back';

        if (this.props.isChecked) 
            className += ' DynamicCheckBox__check--checked'

        return className;
    }

    /**
     * Gets the class name(s) for the inner container.
     * @returns {string} The class name(s).
     */
    getContainerClassName() {
        let className = 'DynamicCheckBox__container card';

        if (this.props.isActive)
            className += ' card--is-flipped';


        return className;
    }

    /**
     * Called when the checkbox is clicked.
     * @param {object} e The event.
     */
    handleClicked(e) {
        if (this.props.isActive) {
            e.preventDefault();
            e.stopPropagation();
            this.props.onClick();
        }
    }

}

DynamicCheckBox.propTypes = propTypes;
DynamicCheckBox.defaultProps = defaultProps;

export default DynamicCheckBox;