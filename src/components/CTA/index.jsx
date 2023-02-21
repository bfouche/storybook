/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
 
const CTA = ({ linkClassName, href, children, ...props }) => {
  if (href.indexOf('http') > -1) {
    return (
      <a 
        href={href} className={linkClassName} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClassName} {...props} >
        {children}
    </Link>
  );
};

CTA.defaultProps = {
  linkClassName: '',
  href: '#',
};

CTA.propTypes = {
  linkClassName: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
]).isRequired
};

export default CTA;
