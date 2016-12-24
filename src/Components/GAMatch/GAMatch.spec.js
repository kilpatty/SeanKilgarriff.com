import React from 'react';
// import { Link, MemoryRouter } from 'react-router';
import { Match } from 'react-router';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import GAMatch from './GAMatch';

describe('GAMatch', () => {
  it('should render Match and the Component', () => {
    const wrapper = shallow(<GAMatch />);
    expect(wrapper.containsAllMatchingElements([
      <Match />,
    ])).to.equal(true);
  });
});
