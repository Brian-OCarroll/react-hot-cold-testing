import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {
    const seedList = [];
    beforeAll(() => {
        for (let i=0; i < 10; i++) {
            seedList.push(Math.floor(Math.random() * 100) + 1)
        }
    })
    it('renders the list', () => {
        shallow(<GuessList guesses={seedList}/>)
    })
    it('Renders a list of guesses', () => {
        const wrapper = shallow(<GuessList guesses={seedList} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(seedList.length);
        seedList.forEach((value, index) => {
          expect(items.at(index).text()).toEqual(value.toString());
        });
    });
})