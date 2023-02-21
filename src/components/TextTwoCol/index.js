import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Wysiwyg from '../Wysiwyg';
import StyledTextTwoCol from './styles';

const TextTwoCol = ({ titleColOne, textColOne, titleColTwo, textColTwo }) => (
  <StyledTextTwoCol>
    <Row className="mr40">
      <Col xs={11} sm={6} lg={6} className="mb-5">
        <h2 className="textTwotheTitleOne">{titleColOne}</h2>
        <div className="wysiwyg">
          <Wysiwyg text={textColOne.value} />
        </div>
      </Col>
      <Col xs={11} sm={6} lg={6} className="mb-5">
        <h2 className="textTwotheTitleTwo">{titleColTwo}</h2>
        <div className="wysiwyg">
          <Wysiwyg text={textColTwo.value} />
        </div>
      </Col>
    </Row>
  </StyledTextTwoCol>
);

TextTwoCol.defaultProps = {
  titleColOne: null,
  titleColTwo: null,
};

TextTwoCol.propTypes = {
  titleColOne: PropTypes.string,
  textColOne: PropTypes.object.isRequired,
  titleColTwo: PropTypes.string,
  textColTwo: PropTypes.string.isRequired,
};
export default TextTwoCol;
