import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Isomorphic from 'components/../util/IsomorphicWrapper';

import <%= componentName %> from './Component';

storiesOf('<%= componentName %>', module)
  .addDecorator(story => (
    <Isomorphic>
      <div className="container">
        {story()}
      </div>
    </Isomorphic>
  ))
  .add('Basic', () => (
    <<%= componentName %> />,
  ));
