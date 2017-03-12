import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from 'styles.scss';

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

export default withStyles(s)(Component);

