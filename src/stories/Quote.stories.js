import React from 'react';
import Quote from '../components/Quote';

export default {
  title: 'Quote',
  component: Quote,
};

const Template = ({children, ...args}) => <Quote {...args} />;

export const Minimal = Template.bind({});
Minimal.args = {
  quote: 'Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.',
  author: 'Aldous Huxley',
}

export const WithReference = Template.bind({});
WithReference.args = {
  quote: 'Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.',
  author: 'Aldous Huxley',
  sourceSiteUrl: 'https://www.huxley.net/bnw/four.html',
  sourceSiteText: 'Brave new wolrd',
}

export const WithImage = Template.bind({});
WithImage.args = {
  quote: 'Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.',
  author: 'Aldous Huxley',
  image: {url: 'http://via.placeholder.com/180x180', alt: 'quote image'},
  sourceSiteUrl: 'https://www.huxley.net/bnw/four.html',
  sourceSiteText: 'Brave new wolrd',
}
