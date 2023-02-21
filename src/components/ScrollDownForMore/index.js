import React from 'react';
import PropTypes from 'prop-types';
import StyledScrollDownForMore from './styles';

const ScrollDownForMore = ({ text }) => (
  <StyledScrollDownForMore>
    {text ? (
      <div className="grid grid-cols-12">
        <div className="col-span-11">
          <p>
            <span>{text}</span>
          </p>
        </div>
      </div>
    ) : (
      <></>
    )}
  </StyledScrollDownForMore>
);

ScrollDownForMore.defaultProps = {
  text: null,
};

ScrollDownForMore.propTypes = {
  text: PropTypes.string,
};

export default ScrollDownForMore;
