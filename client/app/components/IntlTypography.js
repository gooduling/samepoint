import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';

export const IntlTypo = ({ intl, children, ...typoProps }) => {
  return (
    <Typography {...typoProps}>
      {intl && <FormattedMessage {...intl} />}
      {children}
    </Typography>
  );
};

IntlTypo.propTypes = {
  intl: PropTypes.object,
  children: PropTypes.node,
};
