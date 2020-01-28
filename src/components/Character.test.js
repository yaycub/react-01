import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character Component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Character  name="Alan Rails" image="image.jpeg" status="Dead" species="Human, Superhuman (Ghost trains summoner)" gender="Male" origin="unkown" lastLoc="Worldender's lair"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
