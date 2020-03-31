import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export const LinkBtn = ({ to, children, margin = 15, ...btnProps }) => (
  <Link to="/search" className="linkButton" style={{ margin: `${margin}px 0` }}>
    <Button size="large" variant="contained" color="secondary" {...btnProps}>
      {children || 'TODO: btn text'}
    </Button>
  </Link>
);

LinkBtn.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
  margin: PropTypes.number,
};
