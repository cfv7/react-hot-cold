import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', ()=>{
  var dummyGuesses = [];
  beforeAll(() => {
    for(let i=0;i<10;i++) {
      dummyGuesses.push(i);
    }
  })

  it('Renders without crashing', ()=> {
    shallow(<GuessCount />)
  })

  it('Checks to confirm correct count', ()=> {
    const wrapper = mount(<GuessCount count={dummyGuesses.length} />)
    expect(wrapper.prop('count')).toEqual(dummyGuesses.length)
  })

  it('Renders a span element', () => { 
    const wrapper = mount(<GuessCount count={dummyGuesses.length} />)
    expect(wrapper.contains(<p>Guess #<span id="count">{wrapper.prop('count')}</span>!</p>)).toEqual(true);
  })
})

