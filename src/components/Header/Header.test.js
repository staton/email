import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Header } from './Header';
import ListSelectionHeader from '../ListSelectionHeader/ListSelectionHeader';
import MainHeader from '../MainHeader/MainHeader';

describe('<Header />', () => {

    it('renders correctly for small screens', () => {
        const wrapper = shallow(<Header isSmallScreen={true} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders correctly for large screens', () => {
        const wrapper = shallow(<Header isSmallScreen={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('shows the list selection header for small screens when selecting multiple items', () => {
        const wrapper = shallow(
            <Header 
                isInboxListActive={true}
                isSmallScreen={true}
            />);
        expect(wrapper.find(ListSelectionHeader).length).toEqual(1);
        expect(wrapper.find(MainHeader).length).toEqual(0);
    });

});