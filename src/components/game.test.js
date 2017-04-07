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

  it('Passes guesses prop to guessList', () => {
    const wrapper = shallow(<Game />)
    const instance = wrapper.instance()
    dummyGuesses.forEach((num) => {
      instance.guess(num)
    })
    const list = wrapper.find('GuessList')
    expect(list.prop('guesses')).toEqual(dummyGuesses)    
  })  

  it('Generates a valid number for the correctAnswer property in state', ()=>{
    const wrapper = shallow(<Game />)
    const correctAnswer= wrapper.state('correctAnswer')
    expect(typeof correctAnswer).toEqual('number')
  })
})



