/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import StyledListQuote from './styles';
import Quote from '../Quote';
import ButtonWithIcon from '../ButtonWithIcon';

const QuoteWithImgContent = ({ quotesContent, quotesCta }) => (
  <div>
    <StyledListQuote>
      {quotesContent && quotesContent.length && quotesContent.map((article, index) => (
        <Quote
          image={article.entity.fieldCptQuoteImage}
          author={article.entity.fieldCtpQuoteAuthor}
          quote={article.entity.fieldCtpQuoteTextContent}
          sourceSiteText={article.entity.fieldCtpQuoteReferences}
          inList
          key={`thumbnail-related-content-${index}`}
        />
      ))}
    </StyledListQuote>
    { quotesCta && quotesCta.title && (
    <div className="multiQuotes-ctaContainer">
      <ButtonWithIcon
        btnLink={quotesCta.url.path}
        icon="bigArrow"
        btnText={quotesCta.title}
      />
    </div>
    )}
  </div>
);

QuoteWithImgContent.propTypes = {
  quotesContent: PropTypes.array.isRequired,
  quotesCta: PropTypes.object.isRequired,
};

export default QuoteWithImgContent;
