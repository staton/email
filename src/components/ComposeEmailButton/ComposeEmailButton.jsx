import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    content: PropTypes.any.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.string
};

const defaultProps = {
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
                <div className="ComposeEmailButton__inner-div-1">
                    <div className="ComposeEmailButton__inner-div-2">
                        <div className="ComposeEmailButton__inner-div-3">
                            <div className="ComposeEmailButton__inner-div-4">
                                <button 
                                    className="ComposeEmailButton__button"
                                    onClick={this.props.onClick}
                                    title={this.props.title}
                                >
                                    {this.props.content}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
    }

}

ComposeEmailButton.propTypes = propTypes;
ComposeEmailButton.defaultProps = defaultProps;

export default ComposeEmailButton;