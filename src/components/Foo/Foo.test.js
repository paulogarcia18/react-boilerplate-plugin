import React from 'react';
import { shallow } from 'enzyme';

// Components
import Foo from './Foo';

function setup() {
  const props = {
    imgPath: 'some/image/path/to/a/mock/image',
  };
  const wrapper = shallow(<Foo />);
  return { wrapper, props };
}

describe('Foo Test Suite', () => {
  it('Should have a paragraph', () => {
    const { wrapper } = setup();
    expect(wrapper.find('p').exists()).toBe(true);
  });
  it('renders correctly', () => {});
});
