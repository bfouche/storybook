/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { get } from 'lodash';
import { StyledCaseStudyRelatedTo, StyledRelatedToTitle, StyledRelatedToSubtitle } from './styles';
import ThumbnailContent from '../ThumbnailContent';
import ExpandOnTopic from '../ExpandOnTopic';

const CaseStudyRelatedTo = ({ title, subtitle, caseStudies, fieldTags }) => (
  <StyledCaseStudyRelatedTo>
    <Row className="mr40">
      <Col lg={{ span: 10, offset: 1 }}>
        <Row>
          <Col lg={12} md={12}>
            <StyledRelatedToTitle>{title}</StyledRelatedToTitle>
            {subtitle && (
              <StyledRelatedToSubtitle>
                <p>{subtitle}</p>
              </StyledRelatedToSubtitle>
            )}
          </Col>
        </Row>
        {caseStudies && caseStudies.length && (
          <Row className="caseStudyRelatedToList">
            {caseStudies.map((caseStudy, index) => (
              <Col lg={6} md={10} key={`thumbnail-case-study-related-${index}`}>
                <ThumbnailContent
                  image={get(caseStudy, 'entity.fieldImage.entity.image.url', null)}
                  category={get(caseStudy, 'entity.fieldCategory.entity.name', null)}
                  title={get(caseStudy, 'entity.title', '')}
                  description={get(caseStudy, 'entity.fieldTeaser', null)}
                  redirectUrl={get(caseStudy, 'entity.path.alias', null)}
                  position="horizontal"
                />
              </Col>

            ))}
          </Row>
        )}
        <Row>
          <Col lg={12} md={12}>
            {fieldTags && fieldTags.length ? (
              <div>
                <ExpandOnTopic tags={fieldTags} />
              </div>
            ) : (
                <></>
              )}
          </Col>
        </Row>
      </Col>
    </Row>
  </StyledCaseStudyRelatedTo>
);


CaseStudyRelatedTo.defaultProps = {
  subtitle: '',
  caseStudies: [],
  fieldTags: [],
};

CaseStudyRelatedTo.propTypes = {
  title: PropTypes.string.isRequired,
  caseStudies: PropTypes.array,
  fieldTags: PropTypes.array,
  subtitle: PropTypes.string,
};

export default CaseStudyRelatedTo;
