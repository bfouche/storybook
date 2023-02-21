import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import QuoteWithImgContent from './index';

export default {
  title: 'CitationListWithImage',
  decorators: [withKnobs],
};

const articles = [
  {
    entity: {
      fieldCptQuoteImage: {
        entity: {
          image: {
            alt: text('Alt Image', 'Description image'),
            url: text('Path Image', 'https://via.placeholder.com/180x180'),
          },
        },
      },
      fieldCtpQuoteAuthor: text('Author', 'Aldous Huxley'),
      fieldCtpQuoteTextContent: text(
        'Quote',
        'Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.',
      ),
      fieldCtpQuoteReferences: 'Words can be like X-rays',
    },
  },
  {
    entity: {
      fieldCptQuoteImage: {
        entity: {
          image: {
            alt: text('Alt Image', 'Description image'),
            url: text('Path Image', 'https://via.placeholder.com/180x180'),
          },
        },
      },
      fieldCtpQuoteAuthor: text('Author', 'Aldous Huxley'),
      fieldCtpQuoteTextContent: text(
        'Quote',
        'Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.',
      ),
      fieldCtpQuoteReferences: 'Words can be like X-rays',
    },
  },
  {
    entity: {
      fieldCptQuoteImage: {
        entity: {
          image: {
            alt: text('Alt Image', 'Description image'),
            url: text('Path Image', 'https://via.placeholder.com/180x180'),
          },
        },
      },
      fieldCtpQuoteAuthor: text('Author', 'Aldous Huxley'),
      fieldCtpQuoteTextContent: text(
        'Quote',
        'Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.',
      ),
      fieldCtpQuoteReferences: 'Words can be like X-rays',
    },
  },
];

export const Basic = () => (
  <QuoteWithImgContent
    quotesContent={articles}
    quotesCta={{ url: { path: 'https://google.com' }, title: 'title cta' }}
  />
);
