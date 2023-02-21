import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import StyledTextImages from './styles';
import MediaImage from '../MediaImage';
import CTA from '../CTA';

const Text3ImagesWithCTA = ({
  title,
  body,
  cta,
  image1Caption,
  image2Caption,
  image3Caption,
  image1,
  image2,
  image3,
  cta1,
  cta2,
  cta3,
}) => {
  const ctaOnImage = [cta1, cta2, cta3].map((item) => {
    if (item) {
      return item.url.path;
    }
    return '';
  });
  return (
    <StyledTextImages className="textImages full">
      <Row>
        <Col xs={10} sm={10} md={{ span: 6, offset: 0 }} className="textImages__squaresContainer">
          <Fade bottom delay={100} duration={1000}>
            <Row>
              <Col xs={12} sm={12} md={{ span: 6, offset: 0 }} className="textImages__square p-0">
                <CTA href={ctaOnImage[0]}>
                  <MediaImage className="textImages__squareImage" image={image1} />
                  {image1Caption && (
                    <p className="textImages__squareTextContainer">
                      <span className="textImages__squareText">{image1Caption}</span>
                    </p>
                  )}
                </CTA>
              </Col>
              <Col xs={12} sm={12} md={{ span: 6, offset: 0 }} className="textImages__square p-0">
                <CTA href={ctaOnImage[1]}>
                  <MediaImage className="textImages__squareImage" image={image2} />
                  {image2Caption && (
                    <p className="textImages__squareTextContainer">
                      <span className="textImages__squareText">{image2Caption}</span>
                    </p>
                  )}
                </CTA>
              </Col>
              <Col xs={12} sm={12} md={{ span: 6, offset: 0 }} className="textImages__square p-0">
                <CTA href={ctaOnImage[2]}>
                  <MediaImage className="textImages__squareImage" image={image3} />
                  {image3Caption && (
                    <p className="textImages__squareTextContainer">
                      <span className="textImages__squareText">{image3Caption}</span>
                    </p>
                  )}
                </CTA>
              </Col>
              <Col xs={12} sm={12} md={{ span: 6, offset: 0 }} className="p-0">
                <CTA
                  linkClassName="textImages__square textImages__square--btn"
                  href={cta && cta.url ? cta.url.path : '#'}
                >
                  <span className="textImages__squareText textImages__squareText--btn">
                    {cta ? cta.title : ''}
                  </span>
                </CTA>
              </Col>
            </Row>
          </Fade>
        </Col>
        <Col
          xs={{ span: 10, offset: 2 }}
          sm={{ span: 10, offset: 2 }}
          md={{ span: 6, offset: 0 }}
          className="textImages__contentContainer"
        >
          <Fade bottom delay={100} duration={1000}>
            <h2 className="textImages__title">{title}</h2>
            <p className="textImages__text">{body}</p>
          </Fade>
        </Col>
      </Row>
    </StyledTextImages>
  );
};
Text3ImagesWithCTA.defaultProps = {
  image1Caption: '',
  image2Caption: '',
  image3Caption: '',
  body: '',
  cta1: [],
  cta2: [],
  cta3: [],
};
Text3ImagesWithCTA.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  image1Caption: PropTypes.string,
  image2Caption: PropTypes.string,
  image3Caption: PropTypes.string,
  cta1: PropTypes.object,
  cta2: PropTypes.object,
  cta3: PropTypes.object,
  image1: PropTypes.object.isRequired,
  image2: PropTypes.object.isRequired,
  image3: PropTypes.object.isRequired,
  cta: PropTypes.object.isRequired,
};

export default Text3ImagesWithCTA;
