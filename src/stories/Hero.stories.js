import React from 'react';
import Hero from '../components/Hero';

export default {
  title: 'Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const FullImage = Template.bind({});
FullImage.args = {
  mainTitle: 'Health, Safety and Environmental',
  subtitle: 'Optional text lorem ipsum dolor sit amet consectetur elit on 2 lines.',
  imagePosition: 'full',
  imageSet: {url: 'https://via.placeholder.com/1440x552', alt: 'mon image'},
  category: 'Category',
  date: '01/10/2019',
  sectionTitle: 'Section blurb lorem ipsum dolor sit amet consectectur adipiscing elit.',
  textScroll: "Scroll down for more",
  links: [
    {
      title: 'test',
      uri: 'http://www.google.com',
    },
    {
      title: 'test',
      uri: 'http://www.google.com',
    },
    {
      title: 'test',
      uri: 'http://www.google.com',
    },
  ],
};


export const FullImageWithoutCategoryAndDate = Template.bind({});
FullImageWithoutCategoryAndDate.args = {
  mainTitle: 'Health, Safety and Environmental',
  subtitle: 'Optional text lorem ipsum dolor sit amet consectetur elit on 2 lines.',
  imagePosition: 'full',
  imageSet: {url: 'https://via.placeholder.com/1440x552', alt: 'mon image'},
  sectionTitle: 'Section blurb lorem ipsum dolor sit amet consectectur adipiscing elit.',
  links: [
    {
      title: 'test',
      uri: 'http://www.google.com',
    },
    {
      title: 'test',
      uri: 'http://www.google.com',
    },
    {
      title: 'test',
      uri: 'http://www.google.com',
    },
  ]
};

export const FullImageWithTitleAndOption = Template.bind({});
FullImageWithTitleAndOption.args = {
  mainTitle: 'Health, Safety and Environmental',
  imagePosition: 'full',
  imageSet: {url: 'https://via.placeholder.com/1440x552', alt: 'mon image'},
  sectionTitle: 'Section blurb lorem ipsum dolor sit amet consectectur adipiscing elit.',
  links: [
    {
      title: 'test',
      uri: 'http://www.google.com',
    },
    {
      title: 'test',
      uri: 'http://www.google.com',
    },
    {
      title: 'test',
      uri: 'http://www.google.com',
    },
  ]
};

export const FullImageOnlyTitle = Template.bind({});
FullImageOnlyTitle.args = {
  mainTitle: 'Health, Safety and Environmental',
  imagePosition: 'full',
  imageSet: {url: 'https://via.placeholder.com/1440x552', alt: 'mon image'},
  textScroll: "Scroll down for more",
}

export const LeftImage = Template.bind({});
LeftImage.args = {
  mainTitle: 'Health, Safety and Environmental',
  subtitle: 'Optional text lorem ipsum dolor sit amet consectetur elit on 2 lines.',
  imagePosition: 'left',
  imageSet: {url: 'https://via.placeholder.com/1440x552', alt: 'mon image'},
  category: 'Category',
  date: '01/10/2019',
};

export const RightImage = Template.bind({});
RightImage.args = {
  mainTitle: 'Health, Safety and Environmental',
  subtitle: 'Optional text lorem ipsum dolor sit amet consectetur elit on 2 lines.',
  imagePosition: 'right',
  imageSet: {url: 'https://via.placeholder.com/1440x552', alt: 'mon image'},
  category: 'Category',
  date: '01/10/2019',
  // sectionTitle: 'Section blurb lorem ipsum dolor sit amet consectectur adipiscing elit.',
  textScroll: "Scroll down for more",
  links: [
    {
      title: 'test',
      uri: 'http://www.google.com',
    },
    {
      title: 'test',
      uri: 'http://www.google.com',
    },
    {
      title: 'test',
      uri: 'http://www.google.com',
    },
  ],
};


// export const RightImage = () => (
//   <Hero
//     imagePosition="right"
//     mainTitle={text('Main Title', 'H1 section lorem ipsum')}
//     subtitle={text('Subtitle', 'Optional lorem ipsum dolor sit amet consectetur elit.')}
//     imageSet={imageSet}
//     category={text('Category', 'Category')}
//     date={text('Date', '01/10/2019')}
//     textScroll="Scroll down for more"
//   />
// );

// export const RightImageWithoutSubtitle = () => (
//   <Hero
//     imagePosition="right"
//     mainTitle={text('Main Title', 'H1 section lorem ipsum')}
//     imageSet={imageSet}
//     category={text('Category', 'Category')}
//     date={text('Date', '01/10/2019')}
//     textScroll="Scroll down for more"
//   />
// );
