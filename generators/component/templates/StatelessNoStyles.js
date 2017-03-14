import React, { PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

export const Component = props =>
  <div>
    <%= componentName %>
  </div>;

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;
Component.displayName = '<%= componentName %>';

export default Component;
