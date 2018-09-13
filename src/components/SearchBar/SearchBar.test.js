import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { SearchBar } from './SearchBar';

describe('<SearchBar />', () => {

    Enzyme.configure({ adapter: new Adapter() });

    it('renders correctly', () => {
        const wrapper = shallow(<SearchBar />);
        expect(wrapper).toMatchSnapshot();
    });
    
});