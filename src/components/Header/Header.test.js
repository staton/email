import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { Header } from './Header';

describe('<Header />', () => {

    Enzyme.configure({ adapter: new Adapter() });

    it('renders correctly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
    
});