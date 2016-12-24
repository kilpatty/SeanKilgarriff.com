/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
// import { Link } from 'react-router';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NavigationModal from './NavigationModal';

describe('Navigation Modal', () => {
  it('Should have an exit button', () => {
    const modal = shallow(<NavigationModal />);

    const actual = modal.find('button');
    console.log(actual);
    expect(modal.find('button')).to.have.length(1);
  });

  it('Should have an onClick property', () => {
    const modal = shallow(<NavigationModal />);
    expect(modal.prop('onClick')).to.be.defined;
  });
});

// We want to test the Properties of the component.

// We want to test that it will accept an onclick function

// we want to test that the onclick function works

// we want to test that the onclick function is called when a click is spied.

// we want to test that it has links to all of my pages

// we want to test that those links work when clicked on.

// test the styling/ so maybe test classNmes?
