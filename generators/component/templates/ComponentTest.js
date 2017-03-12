/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import { <%= componentName %> }  from './Component';

describe('<%= componentName %>', () => {
  it('should render equal to the snapshot', () => {
    const wrapper = shallow(<<%= componentName %> />);

    expect(wrapper).toMatchSnapshot();
  });
});
