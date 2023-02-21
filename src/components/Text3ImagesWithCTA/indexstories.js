import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Text3ImagesWithCTA from './index';

export default {
  title: 'Text3ImagesWithCTA',
  decorators: [withKnobs],
};

export const basic = () => (
  <Text3ImagesWithCTA
    title="We have the industry's best minds solving its most complex issues"
    body="Test description"
    cta={{
      title: 'See Our Glossary',
      url: {
        path: 'https://www.google.com',
      },
    }}
    image1Caption="Expertise and Services"
    image2Caption="Business Streams"
    image3Caption="Sectors"
    image1={{
      entity: {
        image: {
          alt: 'description image',
          url:
            'https://staging-genesis.isobar.pprod.aeaws.com/sites/genesys/files/2019-12/Expertise%20and%20Services.png',
        },
      },
    }}
    image2={{
      entity: {
        image: {
          alt: 'description image',
          url:
            'https://staging-genesis.isobar.pprod.aeaws.com/sites/genesys/files/2019-12/Business%20Streams.png',
        },
      },
    }}
    image3={{
      entity: {
        image: {
          alt: 'description image',
          url:
            'https://staging-genesis.isobar.pprod.aeaws.com/sites/genesys/files/2020-01/Sectors%20node.jpg',
        },
      },
    }}
    cta1={{
      title: 'Lien google',
      url: {
        path: 'https://www.google.com',
      },
    }}
    cta2={{
      title: 'Lien google',
      url: {
        path: 'https://www.google.com',
      },
    }}
    cta3={{
      title: '',
      url: {
        path: 'https://www.google.com',
      },
    }}
  />
);
