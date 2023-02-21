import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import TextTwoCol from './index';

export default {
  title: 'TextTwoCol',
  decorators: [withKnobs],
};

export const Full = () => (
  <TextTwoCol
    titleColOne={text(
      'Title Col Left',
      'Optional text lorem ipsum dolor sit amet consectectur adipisc two lines of long title',
    )}
    textColOne={{
      value: text(
        'Text Col Left',
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ...',
      ),
    }}
    titleColTwo={text('Title Col Right', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr')}
    textColTwo={{
      value: text(
        'Text Col Right',
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ...',
      ),
    }}
  />
);
