import React from 'react';
import {shallow, mount} from 'enzyme';
import Game from './game'

describe('<Game />', ()=>{
  
  var dummyGuesses = []
  beforeAll(()=>{
    for(let i=0;i<10;i++) {
      dummyGuesses.push(i);
    }
  })

  it('Renders without crashing', ()=>{
    shallow(<Game />)
  })

  it('Can add guesses to state', ()=>{
    const wrapper = shallow(<Game />) 
    const instance = wrapper.instance()
    dummyGuesses.forEach((num)=>{
      instance.guess(num)
    })
    expect(wrapper.state('guesses').length).toEqual(dummyGuesses.length);
  })

  it('Check if correctAnswer outputs a valid number', ()=>{
    const wrapper = shallow(<Game />)
    const typeCheck = typeof wrapper.state('correctAnswer')
    expect(typeCheck).toEqual('number')
  })

})



