import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ComposeEmailButton from '../ComposeEmailButton/ComposeEmailButton';
import { App } from './App';

describe('<App />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<App loadEmails={jest.fn()} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('contains a ComposeEmailButton component for small screens', () => {
        const wrapper = shallow(
            <App
                isSmallScreen={true}
                loadEmails={jest.fn()}
            />
        );
        expect(wrapper.find(ComposeEmailButton).length).toBe(1);
    });

    it('does not contain a ComposeEmailButton component for large screens', () => {
        const wrapper = shallow(
            <App
                isSmallScreen={false}
                loadEmails={jest.fn()}
            />
        );
        expect(wrapper.find(ComposeEmailButton).length).toBe(0);
    });

});


