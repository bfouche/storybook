import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ThreeColumns from './index';

const content = [
  {
    entity: {
      text: text(
        'bloc1 Text',
        'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
      ),
      fieldIcImage: {
        entity: {
          thumbnail: {
            alt: 'Description image',
            url: 'https://picsum.photos/id/238/300/300',
          },
        },
      },
      fieldIcCaption: 'Caption image',
    },
  },
  {
    entity: {
      text: text(
        'bloc2 Text',
        'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
      ),
      fieldIcImage: {
        entity: {
          thumbnail: {
            alt: 'Description image',
            url: 'https://picsum.photos/id/238/300/300',
          },
        },
      },
      fieldIcCaption: 'Caption image',
    },
  },
  {
    entity: {
      text: text(
        'bloc3 Text',
        'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
      ),
      fieldIcImage: {
        entity: {
          thumbnail: {
            alt: 'Description image',
            url: 'https://picsum.photos/id/238/300/300',
          },
        },
      },
      fieldIcCaption: 'Caption image',
    },
  },
];

export default { title: 'ThreeColumns', decorators: [withKnobs] };
export const Basic = () => (
  <ThreeColumns title="Some optional h3 lorem ipsum dolor sit amet." content={content} />
);
