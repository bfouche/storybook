/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import CTA from '../CTA';
import Wysiwyg from '../Wysiwyg';
import StyledCaseStudyFirstParagraph from './styles';

const CaseStudyFirstParagraph = ({ titleColOne, textColOne, titleColTwo, file }) => (
  <StyledCaseStudyFirstParagraph>
    <Row>
      <Col xs={11} sm={11} lg={{ span: 7, offset: 1 }}>
        {titleColOne ? <h2 className="CaseStudyFirstParagraphtheTitleOne">{titleColOne}</h2> : <></>}
        <div className="wysiwyg">
          <Wysiwyg text={textColOne.value} />
        </div>
      </Col>
      <Col xs={11} sm={11} lg={4}>
        <div className="CaseStudyFirstParagraphInnerContent">
          <p className="CaseStudyFirstParagraphtheTitleTwo">{titleColTwo}</p>
          {file && file.entity ? (
            <CTA href={file.entity.url}>
              <span>
                {file.entity.filename}
                <span aria-hidden="true" />
              </span>
            </CTA>
          ) : (
              <></>
            )}
        </div>
      </Col>
    </Row>
  </StyledCaseStudyFirstParagraph>
);

CaseStudyFirstParagraph.defaultProps = {
  titleColOne: null,
};

CaseStudyFirstParagraph.propTypes = {
  titleColOne: PropTypes.string,
  textColOne: PropTypes.object.isRequired,
  titleColTwo: PropTypes.string.isRequired,
  file: PropTypes.object.isRequired,
};
export default CaseStudyFirstParagraph;
