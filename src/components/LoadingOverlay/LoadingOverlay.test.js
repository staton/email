import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import {LoadingOverlay} from './LoadingOverlay';
import LoadingOverlayState from '../../enums/LoadingOverlay';

describe('<LoadingOverlay />', () => {

    it('renders correctly when visible', () => {
        const wrapper = shallow(<LoadingOverlay loadingOverlayState={LoadingOverlayState.Visible} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders correctly when not visible', () => {
        const wrapper = shallow(<LoadingOverlay loadingOverlayState={LoadingOverlayState.None} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('contains the ..--fade class when fading', () => {
        const wrapper = shallow(<LoadingOverlay loadingOverlayState={LoadingOverlayState.Fading} />);
        expect(wrapper.find('.LoadingOverlay--fade').length).toEqual(1);
    });
    
});