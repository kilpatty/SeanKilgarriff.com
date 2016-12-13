import React from 'react';
import { Link } from 'react-router';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('Should have a link to Copyright', () => {
    const footer = shallow(<Footer />);
    expect(footer.find(Link)).to.have.length(1);
  });

  it('Should render a footer element', () => {
    const footer = shallow(<Footer />);
    expect(footer.find('footer')).to.have.length(1);
  });

  it('Should contain my name in the text', () => {
    const footer = mount(<Footer />);
    expect(footer.text()).to.contain('Sean Kilgarriff');
  });

  it('Should contain a link to the copyright page', () => {
    const footer = mount(<Footer />);
    expect(footer.find('a').prop('href')).to.equal('/Copyright');
  });
});
