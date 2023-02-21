import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Tabs, Tab } from 'react-bootstrap';
import Quote from '../Quote';
import CaseStudyFirstParagraph from '../CaseStudyFirstParagraph';
import TextOneCol from '../TextOneCol';

export default { title: 'Tabs', decorators: [withKnobs] };
export const Desktop = () => (
  <Tabs defaultKey="tab1">
    <Tab eventKey="tab1" title={text('Title 1', 'Tab title 1')}>
      <Quote
        quote="Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced."
        author="Aldous Huxley"
      />
    </Tab>
    <Tab eventKey="tab2" title={text('Title 2', 'Tab title 2 2 lines lorem ipsum')}>
      <Quote
        quote="Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced."
        author="Aldous Huxley"
        sourceSiteUrl="https://www.huxley.net/bnw/four.html"
        sourceSiteText="Brave new wolrd"
      />
      <CaseStudyFirstParagraph
        titleColOne="Optional text lorem ipsum dolor sit amet consectectur adipisc two lines of long title"
        textColOne={{
          value: text(
            'Text Col Left',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ...',
          ),
        }}
        titleColTwo="Download the full case study :"
        file={{
          entity: {
            filename: text('Text Col Right', 'Download .pdf (152ko)'),
            url: text('Target Link', 'http://www.google.com'),
          },
        }}
      />
    </Tab>
    <Tab eventKey="tab3" title={text('Title 3', 'Tab title 3 2 lines lorem ipsum')}>
      <TextOneCol
        titleColOne="Optional text lorem ipsum dolor sit amet consectectur adipisc two lines of long title"
        textColOne={{
          value: text(
            'Text Col Left',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ...',
          ),
        }}
        titleColTwo="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
        textColTwo={{
          value: text(
            'Text Col Two',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ...',
          ),
        }}
      />
      <Quote
        quote="Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced."
        author="Aldous Huxley"
        sourceSiteUrl="https://www.huxley.net/bnw/four.html"
        sourceSiteText="Brave new wolrd"
      />
      <CaseStudyFirstParagraph
        titleColOne="Optional text lorem ipsum dolor sit amet consectectur adipisc two lines of long title"
        textColOne={{
          value: text(
            'Text Col Left',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ...',
          ),
        }}
        titleColTwo="Download the full case study :"
        file={{
          entity: {
            filename: text('Text Col Right', 'Download .pdf (152ko)'),
            url: text('Target Link', 'http://www.google.com'),
          },
        }}
      />
    </Tab>
    <Tab eventKey="tab4" title={text('Title 4', 'Tab title 4')}>
      <Quote
        quote="Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced."
        author="Aldous Huxley"
        sourceSiteUrl="https://www.huxley.net/bnw/four.html"
        sourceSiteText="Brave new wolrd"
      />
      <CaseStudyFirstParagraph
        titleColOne="Optional text lorem ipsum dolor sit amet consectectur adipisc two lines of long title"
        textColOne={{
          value: text(
            'Text Col Left',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ...',
          ),
        }}
        titleColTwo="Download the full case study :"
        file={{
          entity: {
            filename: text('Text Col Right', 'Download .pdf (152ko)'),
            url: text('Target Link', 'http://www.google.com'),
          },
        }}
      />
    </Tab>
  </Tabs>
);
export const Mobile = () => (
  <Tabs defaultKey="tab1" mobile>
    <Tab eventKey="tab1" title={text('Title 1', 'Tab title 1')} mobile>
      <Quote
        quote="Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced."
        author="Aldous Huxley"
      />
    </Tab>
    <Tab eventKey="tab2" title={text('Title 2', 'Tab title 2 2 lines lorem ipsum')} mobile>
      <Quote
        quote="Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced."
        author="Aldous Huxley"
        sourceSiteUrl="https://www.huxley.net/bnw/four.html"
        sourceSiteText="Brave new wolrd"
      />
      <CaseStudyFirstParagraph
        titleColOne="Optional text lorem ipsum dolor sit amet consectectur adipisc two lines of long title"
        textColOne={{
          value: text(
            'Text Col Left',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ...',
          ),
        }}
        titleColTwo="Download the full case study :"
        file={{
          entity: {
            filename: text('Text Col Right', 'Download .pdf (152ko)'),
            url: text('Target Link', 'http://www.google.com'),
          },
        }}
      />
    </Tab>
    <Tab eventKey="tab3" title={text('Title 3', 'Tab title 3 2 lines lorem ipsum')} mobile>
      <TextOneCol
        titleColOne="Optional text lorem ipsum dolor sit amet consectectur adipisc two lines of long title"
        textColOne={{
          value: text(
            'Text Col Left',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ...',
          ),
        }}
        titleColTwo="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
        textColTwo={{
          value: text(
            'Text Col Two',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ...',
          ),
        }}
      />
      <Quote
        quote="Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced."
        author="Aldous Huxley"
        sourceSiteUrl="https://www.huxley.net/bnw/four.html"
        sourceSiteText="Brave new wolrd"
      />
      <CaseStudyFirstParagraph
        titleColOne="Optional text lorem ipsum dolor sit amet consectectur adipisc two lines of long title"
        textColOne={{
          value: text(
            'Text Col Left',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ...',
          ),
        }}
        titleColTwo="Download the full case study :"
        file={{
          entity: {
            filename: text('Text Col Right', 'Download .pdf (152ko)'),
            url: text('Target Link', 'http://www.google.com'),
          },
        }}
      />
    </Tab>
    <Tab eventKey="tab4" title={text('Title 4', 'Tab title 4')} mobile>
      <Quote
        quote="Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced."
        author="Aldous Huxley"
        sourceSiteUrl="https://www.huxley.net/bnw/four.html"
        sourceSiteText="Brave new wolrd"
      />
      <CaseStudyFirstParagraph
        titleColOne="Optional text lorem ipsum dolor sit amet consectectur adipisc two lines of long title"
        textColOne={{
          value: text(
            'Text Col Left',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ...',
          ),
        }}
        titleColTwo="Download the full case study :"
        file={{
          entity: {
            filename: text('Text Col Right', 'Download .pdf (152ko)'),
            url: text('Target Link', 'http://www.google.com'),
          },
        }}
      />
    </Tab>
  </Tabs>
);
