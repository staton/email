import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { DrawerMenu } from './DrawerMenu';

describe('<DrawerMenu />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<DrawerMenu />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});