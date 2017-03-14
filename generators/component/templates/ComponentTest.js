/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import { Component } from './Component';

describe('<%= componentName %>', () => {
  it('should render equal to the snapshot', () => {
    const wrapper = shallow(<Component />);

    expect(wrapper).toMatchSnapshot();
  });
});
