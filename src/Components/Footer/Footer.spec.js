import React from 'react';
import { Link } from 'react-router';
import { expect } from 'chai';
import { shallow } from 'enzyme';
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

  it('Should render the proper copyright text', () => {
    const footer = shallow(<Footer />);
    expect(footer.contains(<Link to="/Copyright"> Sean Kilgarriff Original &copy; 2016</Link>)).to.equal(true);
  });
});
