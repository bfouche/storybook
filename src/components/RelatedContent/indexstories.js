import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import RelatedContent from './index';

const colOne = {
  entity: {
    title: 'Test Article',
    path: {
      alias: 'https://www.google.com',
    },
    fieldTeaser: 'Teaser contenu test article',
    fieldImage: {
      entity: {
        image: {
          alt: 'description image',
          url:
            'https://dev-genesis.isobar.pprod.aeaws.com/sites/genesys/files/2019-12/Sakhalin%20case.jpg',
        },
      },
    },
    fieldCategory: {
      entity: {
        name: 'Case study',
      },
    },
    fieldTags: [
      {
        entity: {
          name: 'tag1',
        },
      },
      {
        entity: {
          name: 'tag2',
        },
      },
    ],
  },
};

const colTwo = {
  entity: {
    title: 'Test Article',
    path: {
      alias: 'https://www.google.com',
    },
    fieldTeaser: 'Teaser contenu test article',
    fieldImage: {
      entity: {
        image: {
          alt: 'description image',
          url:
            'https://dev-genesis.isobar.pprod.aeaws.com/sites/genesys/files/2019-12/Sakhalin%20case.jpg',
        },
      },
    },
    fieldCategory: {
      entity: {
        name: 'Case study',
      },
    },
    fieldTags: [
      {
        entity: {
          name: 'tag1',
        },
      },
      {
        entity: {
          name: 'tag2',
        },
      },
    ],
  },
};

const colThree = {
  entity: {
    title: 'Test Article',
    path: {
      alias: 'https://www.google.com',
    },
    fieldTeaser: 'Teaser contenu test article',
    fieldImage: {
      entity: {
        image: {
          alt: 'description image',
          url:
            'https://dev-genesis.isobar.pprod.aeaws.com/sites/genesys/files/2019-12/Sakhalin%20case.jpg',
        },
      },
    },
    fieldCategory: {
      entity: {
        name: 'Case study',
      },
    },
    fieldTags: [
      {
        entity: {
          name: 'tag1',
        },
      },
      {
        entity: {
          name: 'tag2',
        },
      },
    ],
  },
};

const colFour = {
  entity: {
    title: 'Test Article',
    path: {
      alias: 'https://www.google.com',
    },
    fieldTeaser: 'Teaser contenu test article',
    fieldImage: {
      entity: {
        image: {
          alt: 'description image',
          url:
            'https://dev-genesis.isobar.pprod.aeaws.com/sites/genesys/files/2019-12/Sakhalin%20case.jpg',
        },
      },
    },
    fieldCategory: {
      entity: {
        name: 'Case study',
      },
    },
    fieldTags: [
      {
        entity: {
          name: 'tag1',
        },
      },
      {
        entity: {
          name: 'tag2',
        },
      },
    ],
  },
};

export default { title: 'RelatedContent', decorators: [withKnobs] };
export const Basic = () => (
  <RelatedContent
    title={text('Title', 'Related articles')}
    colOne={colOne}
    colTwo={colTwo}
    colThree={colThree}
    colFour={colFour}
  />
);
