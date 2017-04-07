import React from 'react';
import {shallow, mount} from 'enzyme';
import TopNav from './top-nav';
import Game from './game'

describe('<TopNav />', ()=>{

  it('Renders without crashing', ()=>{
    shallow(<TopNav />)
  })

  it('Should fire onNewGame callback', ()=>{
    const callback = jest.fn()
    const wrapper = mount(<TopNav onNewGame={callback}/>)
    const gameWrapper = shallow(<Game />)
    const element = wrapper.find('.new')
    element.simulate('click')
    expect(callback).toHaveBeenCalled()
    expect(gameWrapper.state('guesses').length).toEqual(0)
  })

  it('Should fire onInfo callback', ()=>{
    const callback = jest.fn()
    const wrapper = mount(<TopNav onInfo={callback}/>)
    const element = wrapper.find('.what')
    element.simulate('click')
    expect(callback).toHaveBeenCalled()
  })

  // it('Should empty the guesses array', ()=>{
  //   var dummyGuesses = []
  //   for(let i=0;i<10;i++) {
  //     dummyGuesses.push(i);
  //   }
  //   const wrapper = mount(<TopNav onNewGame={callback} />)
  //   const gameWrapper = mount(<Game />) 
  //   const gameInstance = gameWrapper.instance()
  //   dummyGuesses.forEach((num)=>{
  //     gameInstance.guess(num)
  //   })
  //   const element = wrapper.find('.new')
  //   element.simulate('click')
  //   expect(gameWrapper.state('guesses').length).toEqual(0)
  // })

})