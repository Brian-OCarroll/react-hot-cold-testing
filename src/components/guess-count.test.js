import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders', () => {
        shallow(<GuessCount />)
    })
    it('displays number of guesses', () => {
        const guesses = 3
        const wrapper = shallow(<GuessCount guessCount={guesses} />);
        expect(wrapper.text()).toEqual('You\'ve made 3 guesses!')
    })
})