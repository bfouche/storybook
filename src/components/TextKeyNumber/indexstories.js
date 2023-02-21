import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import TextKeyNumber from './index';

export default {
  title: 'TextKeyNumber',
  decorators: [withKnobs],
};

const keyInfos = [
  {
    entity: {
      fieldKnKey: '3200',
      fieldKnCaption: 'Value 1 dolor sit amet',
    },
  },
  {
    entity: {
      fieldKnKey: '5%',
      fieldKnCaption: 'Value 2 dolor sit amet',
    },
  },
  {
    entity: {
      fieldKnKey: '1,2M',
      fieldKnCaption: 'Value 3 dolor sit amet',
    },
  },
  {
    entity: {
      fieldKnKey: '1,2',
      fieldKnCaption: 'Value 4 dolor sit amet',
    },
  },
];

export const Basic = () => (
  <TextKeyNumber
    titleColOne={text('Title Col Left', 'Results')}
    textColOne={{
      value: text(
        'Text Col Left',
        'From initial engagement in September 2010, we worked closely with Rockhopper from early feasibility to pre-FEED over a period of 2 years. Subsea tie-backs to the Falkland Islands were quickly disounted due to the flow assurance difficulties, as well as the impact on the islands. Reservoir pressure was to be maintained by hot water injection. Offloading of oil to trading tankers enables worldwide markets the be easily accessible with an acceptable offloading uptime. All the deliverables required to enter into FEED were prepared, including a novel functional specification for the entire system based on "functionnality using Norsok nomenclature. ',
      ),
    }}
    titleColTwo={text('Title Col Right', 'Key numbers')}
    keyInfos={keyInfos}
  />
);
