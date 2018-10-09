import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    content: PropTypes.any,
    icon: PropTypes.element,
    onClick: PropTypes.func,
    title: PropTypes.string
};

const defaultProps = {
    content: null,
    icon: null,
    onClick: () => {},
    title: ''
};

export class ComposeEmailButton extends Component {

    constructor(props) {
        super(props);
    }

	render() {
		return (
            <div className="ComposeEmailButton">
                <button 
                    className="ComposeEmailButton__button"
                    onClick={this.props.onClick}
                    title={this.props.title}
                >
                    {
                        (this.props.icon)
                        ?   <span className="ComposeEmailButton__icon">
                            {this.props.icon}
                            </span>
                        :   null
                    }
                    {
                        (this.props.content)
                        ?   <span className="ComposeEmailButton__content">
                            {this.props.content}
                            </span>
                        :   null
                    }
                </button>
            </div>
		);
    }

}

ComposeEmailButton.propTypes = propTypes;
ComposeEmailButton.defaultProps = defaultProps;

export default ComposeEmailButton;