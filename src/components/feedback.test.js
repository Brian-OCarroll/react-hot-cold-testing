import React from 'react';
import {shallow, mount} from 'enzyme';
import Feedback from './feedback';

describe ('<Feedback />', () => {
    it('renders without crashing', () => {
        shallow(<Feedback />)
    });
    it('Displays Feedback', () => {
        const text = 'Here is some feedback Guess again!';
        const wrapper = shallow(<Feedback feedback={text} />);
        expect(wrapper.contains(text)).toEqual(true);
    })
})