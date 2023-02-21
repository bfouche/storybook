/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import CTA from '../CTA';
import { StyledBreadcrumb } from './styles';

const Breacrumb = ({ dataBreadcrumb, classes, color }) => {

  return (
    <StyledBreadcrumb className={classes} color={color}>
      {dataBreadcrumb.map((item) => (
        <li key={`breadcrumb-key-${item.text}`}>
          <CTA href={item.url}>{item.text}</CTA>
        </li>
      ))}
    </StyledBreadcrumb>
  );
};

Breacrumb.defaultProps = {
  color: '#d24100',
  classes: '',
}

Breacrumb.propTypes = {
  dataBreadcrumb: PropTypes.array.isRequired,
  color: PropTypes.string,
  classes: PropTypes.string,
};

export default Breacrumb;
