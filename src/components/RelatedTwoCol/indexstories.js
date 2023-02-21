import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import RelatedTwoCol from './index';

const articles = [
  {
    fieldImage: {
      entity: {
        image: {
          url: text('Image src', 'https://via.placeholder.com/256x144'),
        },
      },
    },
    fieldCategory: {
      entity: {
        name: text('Article category', 'Category'),
      },
    },
    entityLabel: text(
      'Article title',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    fieldTeaser: text(
      'Article description',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    link: 'https://www.google.com',
    path: {
      alias: 'https://www.google.com',
    },
  },
  {
    fieldImage: {
      entity: {
        image: {
          url: text('Image src', 'https://via.placeholder.com/256x144'),
        },
      },
    },
    fieldCategory: {
      entity: {
        name: text('Article category', 'Category'),
      },
    },
    entityLabel: text(
      'Article title',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    fieldTeaser: text(
      'Article description',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    link: 'https://www.google.com',
    path: {
      alias: 'https://www.google.com',
    },
  },
  {
    fieldImage: {
      entity: {
        image: {
          url: text('Image src', 'https://via.placeholder.com/256x144'),
        },
      },
    },
    fieldCategory: {
      entity: {
        name: text('Article category', 'Category'),
      },
    },
    entityLabel: text(
      'Article title',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    fieldTeaser: text(
      'Article description',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    link: 'https://www.google.com',
    path: {
      alias: 'https://www.google.com',
    },
  },
  {
    fieldImage: {
      entity: {
        image: {
          url: text('Image src', 'https://via.placeholder.com/256x144'),
        },
      },
    },
    fieldCategory: {
      entity: {
        name: text('Article category', 'Category'),
      },
    },
    entityLabel: text(
      'Article title',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    fieldTeaser: text(
      'Article description',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    link: 'https://www.google.com',
    path: {
      alias: 'https://www.google.com',
    },
  },
];

const otherArticles = [
  {
    fieldImage: {
      entity: {
        image: {
          url: text('Image src', 'https://via.placeholder.com/256x144'),
        },
      },
    },
    fieldTeaser: text(
      'Article description',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    link: 'https://www.google.com',
    path: {
      alias: 'https://www.google.com',
    },
  },
  {
    fieldImage: {
      entity: {
        image: {
          url: text('Image src', 'https://via.placeholder.com/256x144'),
        },
      },
    },
    fieldTeaser: text(
      'Article description',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    link: 'https://www.google.com',
    path: {
      alias: 'https://www.google.com',
    },
  },
  {
    fieldImage: {
      entity: {
        image: {
          url: text('Image src', 'https://via.placeholder.com/256x144'),
        },
      },
    },
    fieldTeaser: text(
      'Article description',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    link: 'https://www.google.com',
    path: {
      alias: 'https://www.google.com',
    },
  },
  {
    fieldImage: {
      entity: {
        image: {
          url: text('Image src', 'https://via.placeholder.com/256x144'),
        },
      },
    },
    fieldTeaser: text(
      'Article description',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    link: 'https://www.google.com',
    path: {
      alias: 'https://www.google.com',
    },
  },
];

export default { title: 'RelatedTwoCol', decorators: [withKnobs] };
export const Basic = () => (
  <RelatedTwoCol title={text('Title', 'Related articles')} results={articles} />
);
export const other = () => (
  <RelatedTwoCol title={text('Title', 'Related articles')} results={otherArticles} />
);
