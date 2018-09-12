import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { App } from './App';

describe('<App />', () => {

    Enzyme.configure({ adapter: new Adapter() });

    it('renders correctly', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

});


