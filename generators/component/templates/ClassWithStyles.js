import React, { Components, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './styles.scss';

const propTypes = {

};
const defaultProps = {

};

export class Component extends Components {

  render() {
    return (
      <div>
      </div>
    );
  }
}

<%= componentName %>.displayName = '<%= componentName %>';
<%= componentName %>.propTypes = propTypes;
<%= componentName %>.defaultProps = defaultProps;

export default withStyles(s)(Component);
