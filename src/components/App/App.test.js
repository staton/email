import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ComposeEmailButton from '../ComposeEmailButton/ComposeEmailButton';
import LoadingOverlayState from '../../enums/LoadingOverlay';
import { App } from './App';

describe('<App />', () => {

    it('renders correctly when logged in', () => {
        const wrapper = shallow(
            <App 
                emailLoadingOverlayState={LoadingOverlayState.None}
                isLoggedIn={true}
                loadEmails={jest.fn()} 
                userLogin={jest.fn()}
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders correctly when not logged in', () => {
        const wrapper = shallow(
            <App 
                emailLoadingOverlayState={LoadingOverlayState.None}
                isLoggedIn={false}
                loadEmails={jest.fn()} 
                userLogin={jest.fn()}
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders correctly when logged in and loading emails', () => {
        const wrapper = shallow(
            <App 
                emailLoadingOverlayState={LoadingOverlayState.Visible}
                isLoggedIn={true}
                loadEmails={jest.fn()} 
                userLogin={jest.fn()}
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('contains a ComposeEmailButton component for small screens', () => {
        const wrapper = shallow(
            <App
                emailLoadingOverlayState={LoadingOverlayState.None}
                isLoggedIn={true}
                isSmallScreen={true}
                loadEmails={jest.fn()} 
                userLogin={jest.fn()}
            />
        );
        expect(wrapper.find(ComposeEmailButton).length).toBe(1);
    });

    it('does not contain a ComposeEmailButton component for large screens', () => {
        const wrapper = shallow(
            <App
                emailLoadingOverlayState={LoadingOverlayState.None}
                isLoggedIn={true}
                isSmallScreen={false}
                loadEmails={jest.fn()} 
                userLogin={jest.fn()}
            />
        );
        expect(wrapper.find(ComposeEmailButton).length).toBe(0);
    });

});


