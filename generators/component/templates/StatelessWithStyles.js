import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './styles.scss';

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

export default withStyles(s)(Component);
