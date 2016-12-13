/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
// import { Link } from 'react-router';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NavigationModal from './NavigationModal';

describe('Navigation Modal', () => {
  it('Should have an exit button', () => {
    const modal = shallow(<NavigationModal />);
    expect(modal.find('button')).to.have.length(1);
  });

  it('Should have an onClick property', () => {
    const modal = shallow(<NavigationModal />);
    expect(modal.prop('onClick')).to.be.defined;
  });
});
