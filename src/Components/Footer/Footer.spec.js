/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import { Link } from 'react-router';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {

  it('Should have a link to Copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.contains(<Link to="/Copyright"> Sean Kilgarriff Original &copy; 2016</Link>)).to.equal(true);
    expect(wrapper.find(Link)).to.have.length(1);
  });

  it('Shoudl render a footer element', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer')).to.have.length(1);
  });


  // it('should have an image to display the gravatar', () => {
  //   const wrapper = shallow(<Avatar />);
  //   expect(wrapper.find('img')).to.have.length(1);
  // });
  //
  // it('should have props for email and src', () => {
  //   const wrapper = shallow(<Avatar />);
  //   expect(wrapper.props().email).to.be.defined;
  //   expect(wrapper.props().src).to.be.defined;
  // });
});
