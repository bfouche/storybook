/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Wysiwyg from '../Wysiwyg';
import StyledTextKeyNumber from './styles';

const TextKeyNumber = ({ titleColOne, textColOne, titleColTwo, keyInfos }) => (
  <StyledTextKeyNumber className="full">
    <div className="textKeyNumber">
      <Row>
        <Col xs={12} sm={10} lg={{ span: 7, offset: 1 }} className="bgWhite">
          {titleColOne ? <h2 className="textKeyNumber__theTitleOne">{titleColOne}</h2> : <></>}
          <div className="textKeyNumber__wysiwyg">
            {textColOne ? <Wysiwyg text={textColOne.value} /> : <></>}
          </div>
        </Col>
        <Col xs={12} sm={10} lg={4}>
          <div className="textKeyNumber__innerContent">
            <p className="textKeyNumber__theTitleTwo">{titleColTwo}</p>
            <div className="textKeyNumber__keyInfosContainer">
              {keyInfos &&
                keyInfos.map((value, index) => {
                  return (
                    <div className="textKeyNumber__keyInfo" key={`key-info-${index}`}>
                      <p className="textKeyNumber__infoNumber">{value.entity.fieldKnKey}</p>
                      <p className="textKeyNumber__infoTitle">{value.entity.fieldKnCaption}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </StyledTextKeyNumber>
);

TextKeyNumber.defaultProps = {
  titleColOne: null,
  titleColTwo: null,
};

TextKeyNumber.propTypes = {
  titleColOne: PropTypes.string,
  textColOne: PropTypes.object.isRequired,
  titleColTwo: PropTypes.string,
  keyInfos: PropTypes.array.isRequired,
};
export default TextKeyNumber;
