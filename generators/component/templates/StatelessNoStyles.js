import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {

};

const defaultProps = {

};

export const Component = props => (
  <div>
    <%= componentName %>
  </div>
);

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;
Component.displayName = '<%= componentName %>';

export default Component;
