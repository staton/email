import React, { Component } from 'react';

class LoadingSpinner extends Component {

	render() {
        // Google Loader source: https://codepen.io/jczimm/pen/vEBpoL
        return (
            <div className="LoadingSpinner">
                <div className="LoadingSpinner__loader">
                    <svg 
                        className="LoadingSpinner__circular" 
                        viewBox="25 25 50 50">
                    <circle 
                        className="LoadingSpinner__path" 
                        cx="50" 
                        cy="50" 
                        r="20" 
                        fill="none" 
                        strokeWidth="4" 
                        strokeMiterlimit="10"/>
                    </svg>
                </div>
            </div>
        );
    }

}

export default LoadingSpinner;