import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ThumbnailContent from './index';

export default {
  title: 'ThumbnailArticle',
  decorators: [withKnobs],
};

export const vertical = () => (
  <ThumbnailContent
    image={text('Image src', 'https://via.placeholder.com/256x144')}
    category={text('Category name', 'Category')}
    title={text(
      'Article title',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    )}
    description={text(
      'Article description',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    )}
    redirectUrl={text('Redirection url', 'https://www.google.com')}
  />
);

export const horizontal = () => (
  <ThumbnailContent
    image={text('Image src', 'https://via.placeholder.com/180x180')}
    category={text('Category name', 'Category')}
    title={text(
      'Article title',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    )}
    description={text(
      'Article description',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    )}
    redirectUrl={text('Redirection url', 'https://www.google.com')}
    position="horizontal"
  />
);
