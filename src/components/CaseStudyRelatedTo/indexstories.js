import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import CaseStudyRelatedTo from './index';

const caseStudies = [
  {
    image: text('Image src', 'https://via.placeholder.com/180x180'),
    category: text('Article category', 'Category'),
    title: text(
      'Article title',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    description: text(
      'Article description',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    url: 'https://www.google.com',
  },
  {
    image: text('Image src', 'https://via.placeholder.com/180x180'),
    category: text('Article category', 'Category'),
    title: text(
      'Article title',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    description: text(
      'Article description',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    url: 'https://www.google.com',
  },
  {
    image: text('Image src', 'https://via.placeholder.com/180x180'),
    category: text('Article category', 'Category'),
    title: text(
      'Article title',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    description: text(
      'Article description',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    url: 'https://www.google.com',
  },
  {
    image: text('Image src', 'https://via.placeholder.com/180x180'),
    category: text('Article category', 'Category'),
    title: text(
      'Article title',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    description: text(
      'Article description',
      'Lorem ipsum dolor sit amet consectectur adipiscing elit lorem ipsum',
    ),
    url: 'https://www.google.com',
  },
];

export default { title: 'CaseStudiesRelatedTo', decorators: [withKnobs] };
export const Basic = () => (
  <CaseStudyRelatedTo
    title={text('Title', 'Technical papers and case studies related to')}
    subtitle={text('subtitle', 'Feasibility')}
    caseStudies={caseStudies}
    tags={[
      text('Text Button', 'Content tag'),
      text('Text Button', 'Content tag'),
      text('Text Button', 'Content tag'),
    ]}
  />
);
