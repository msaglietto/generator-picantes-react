import React, { PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

export const Component = props =>
  <div>
    <%= componentName %>
  </div>;

<%= componentName %>.propTypes = propTypes;
<%= componentName %>.defaultProps = defaultProps;
<%= componentName %>.displayName = '<%= componentName %>';

export default Component;
