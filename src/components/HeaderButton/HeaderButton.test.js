import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { HeaderButton } from './HeaderButton';

describe('<HeaderButton />', () => {

    const GET_PROPS = () => {
        content: "click me"
    };

    Enzyme.configure({ adapter: new Adapter() });

    it('renders correctly', () => {
        const wrapper = shallow(<HeaderButton {...GET_PROPS()}/>);
        expect(wrapper).toMatchSnapshot();
    });
    
});