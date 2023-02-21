/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import CTA from '../CTA';
import StyledExpandOnTopic from './styles';

const ExpandOnTopic = ({ tags }) => (
  <StyledExpandOnTopic>
    <p>Expand on the topic:</p>
    {tags &&
      tags.length &&
      tags.map((tag, index) => {
        const tagName = get(tag, 'entity.entityLabel', null);
        if (tagName) {
          return (
            <CTA
              href={`/search/search?t=${tagName}`}
              key={`thumbnail-related-content-${index}`}
              linkClassName="expand-topic-btn"
            >
              {tagName}
            </CTA>
          );
        }

        return <></>;
      })}
  </StyledExpandOnTopic>
);

ExpandOnTopic.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default ExpandOnTopic;
