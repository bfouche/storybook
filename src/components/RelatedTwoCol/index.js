/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import ThumbnailContent from '../ThumbnailContent';
import { StyledRelatedContentLink } from './styles';

const RelatedTwoCol = ({ results }) => {
  const documents = [...results].map((item) => {
    if (item.fieldTeaser && item.fieldTeaser.length > 80) {
      const current = item;
      current.description = `${current.fieldTeaser.slice(0, 77)}...`;
      return current;
    }
    return item;
  });

  return (
    <>
      {documents && documents.length ? (
        <Row>
          {documents.map((item, index) => (
            <Col lg={6} md={12} key={`thumbnail-related-content-${index}}`}>
              <StyledRelatedContentLink>
                <ThumbnailContent
                  image={item.fieldImage ? item.fieldImage.entity.image.url : null}
                  category={item.fieldCategory ? item.fieldCategory.entity.name : null}
                  title={item.entityLabel ? item.entityLabel : null}
                  description={item.fieldTeaser ? item.fieldTeaser : null}
                  redirectUrl={item.path ? item.path.alias : null}
                  position="horizontal"
                />
              </StyledRelatedContentLink>
            </Col>
          ))}
        </Row>
      ) : (
          <></>
        )}
    </>
  );
};

RelatedTwoCol.propTypes = {
  results: PropTypes.array.isRequired,
};

export default RelatedTwoCol;
