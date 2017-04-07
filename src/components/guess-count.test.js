import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', ()=>{
  it('Renders without crashing', ()=>{
    shallow(<GuessCount />)
  })
  it('Checks to confirm correct count', ()=>{
    var dummyGuesses = []
    for(let i=0;i<10;i++) {
      dummyGuesses.push(i);
    }
    const wrapper = mount(<GuessCount count={dummyGuesses.length} />)
    expect(wrapper.prop('count')).toEqual(dummyGuesses.length)
  })
})

