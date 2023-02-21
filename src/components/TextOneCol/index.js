import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { get } from 'lodash';
import Wysiwyg from '../Wysiwyg';
import StyledTextOneCol from './styles';

const TextOneCol = ({ titleColOne, textColOne, titleColTwo, textColTwo, column }) => (
  <StyledTextOneCol className="full">
    <Row className="mr40">
      <Col xs={11} sm={11} lg={{ span: 7, offset: 1 }}>
        <h2 className="textOnetheTitleOne">{titleColOne}</h2>
        <div className="wysiwyg">
          <Wysiwyg text={textColOne.value} />
        </div>
      </Col>
      {column && column === 'twocolumn' && get(textColTwo, 'value') && (
        <Col xs={11} sm={11} lg={4}>
          <div className="textOneInnerContent">
            <p className="textOnetheTitleTwo">{titleColTwo}</p>
            <div className="textOnetheTextTwo">
              <Wysiwyg text={textColTwo.value} />
            </div>
          </div>
        </Col>
      )}
    </Row>
  </StyledTextOneCol>
);

TextOneCol.defaultProps = {
  titleColOne: null,
  titleColTwo: null,
  textColTwo: null,
};

TextOneCol.propTypes = {
  titleColOne: PropTypes.string,
  textColOne: PropTypes.object.isRequired,
  column: PropTypes.oneOf(['onecolumn', 'twocolumn']).isRequired,
  titleColTwo: PropTypes.string,
  textColTwo: PropTypes.object,
};
export default TextOneCol;
