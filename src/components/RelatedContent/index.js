/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import CTA from '../CTA';
import ThumbnailContent from '../ThumbnailContent';
import { StyledRelatedContentTitle, StyledRelatedContentLink } from './styles';

const RelatedContent = ({ title, colOne, colTwo, colThree, colFour }) => {
  const articles = [colOne, colTwo, colThree, colFour]
    .filter((col) => col !== null)
    .map((item) => {
      if (item.entity.fieldTeaser && item.entity.fieldTeaser.length > 80) {
        const current = item;
        current.entity.fieldTeaser = `${current.entity.fieldTeaser.slice(0, 77)}...`;
        return current;
      }
      return item;
    });
  if (articles.length >= 2) {
    const size = { desktop: 3, mobile: 12 };
    if (articles.length === 3) {
      size.desktop = 4;
    } else if (articles.length === 2) {
      size.desktop = 6;
    }
    return (
      <div>
        <Row>
          <Col lg={12}>
            {title ? <StyledRelatedContentTitle>{title}</StyledRelatedContentTitle> : null}
            {articles && articles.length ? (
              <Row>
                {articles.map((item, index) => (
                  <Col
                    lg={size.desktop}
                    md={size.mobile}
                    key={`thumbnail-related-content-${index}}`}
                  >
                    <StyledRelatedContentLink>
                      <CTA href={item.entity && item.entity.path && item.entity.path.alias ? item.entity.path.alias : ''}>
                        <ThumbnailContent
                          image={
                            item.entity.fieldImage
                              ? item.entity.fieldImage.entity.image.url
                              : undefined
                          }
                          category={
                            item.entity.fieldCategory
                              ? item.entity.fieldCategory.entity.name
                              : undefined
                          }
                          title={item.entity.title}
                          description={
                            item.entity.fieldTeaser ? item.entity.fieldTeaser : ''
                          }
                          redirectUrl={null}
                        />
                      </CTA>
                    </StyledRelatedContentLink>
                  </Col>
                ))}
              </Row>
            ) : (
                <></>
              )}
          </Col>
        </Row>
      </div>
    );
  }
  return <></>;
};

RelatedContent.defaultProps = {
  title: null,
  colTwo: null,
  colThree: null,
  colFour: null,
};

RelatedContent.propTypes = {
  title: PropTypes.string,
  colOne: PropTypes.object.isRequired,
  colTwo: PropTypes.object,
  colThree: PropTypes.object,
  colFour: PropTypes.object,
  
};

export default RelatedContent;
