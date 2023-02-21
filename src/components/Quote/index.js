/* eslint-disable react/jsx-indent */

import React from 'react';
import PropTypes from 'prop-types';
import StyledQuote from './styles';

const Quote = ({ quote, author, sourceSiteUrl, sourceSiteText, image }) => (
  <StyledQuote image={image}>
    {image ? <div><img src={image.url} alt={image?.alt} /></div> : <></>}
    <div className="blockquoteContainer">
      <blockquote cite={sourceSiteUrl}>
        <p>{quote}</p>
        <small>
          {author ? author : ''}
          {sourceSiteText ? (
            <cite>
              {'\u00A0'}
              {sourceSiteText}
            </cite>
          ) : (
              <></>
            )}
        </small>
      </blockquote>
    </div>
  </StyledQuote>
);

Quote.defaultProps = {
  sourceSiteUrl: null,
  sourceSiteText: null,
  image: null,
};

Quote.propTypes = {
  image: PropTypes.object,
  quote: PropTypes.string.isRequired,
  sourceSiteUrl: PropTypes.string,
  sourceSiteText: PropTypes.string,
  author: PropTypes.string.isRequired,
};
export default Quote;
