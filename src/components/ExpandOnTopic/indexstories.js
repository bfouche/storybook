import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ExpandOnTopic from '.';

const tags = ['tag1', 'tag2', 'tag3'];

export default { title: 'ExpandOnTopic', decorators: [withKnobs] };
export const Basic = () => <ExpandOnTopic tags={tags} />;
