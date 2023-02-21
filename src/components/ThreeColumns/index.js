/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'react-bootstrap';
import StyledColThree from './styles';

const colSize = (blocs) => {
  const result = { span: 4, offset: 0 };
  if (blocs.length <= 3) {
    result.span = 4;
  } else {
    result.span = 3;
  }
  return result;
};

const ThreeColumns = ({ title, content }) => {
  if (content) {
    return (
      <StyledColThree>
        <div className="colThree">
          <Container>
            <Row>
              <Col
                xs={{ span: 10, offset: 1 }}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
              >
                <h2 className="colThree__title">{title}</h2>
                <Row>
                  {content.map((item, index) => (
                    <Col key={index} className="colThree__bloc" xs={12} sm={12} md={colSize(item)}>
                      <img
                        className="colThree__blocImage"
                        alt={item.entity.fieldIcImage.entity.thumbnail.alt}
                        src={item.entity.fieldIcImage.entity.thumbnail.url}
                      />
                      <p className="colThree__blocText">{item.entity.fieldIcCaption}</p>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </StyledColThree>
    );
  }
  return <></>;
};

ThreeColumns.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
};

export default ThreeColumns;
