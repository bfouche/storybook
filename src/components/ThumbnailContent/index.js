/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import CTA from '../CTA';
import ButtonWithIcon from '../ButtonWithIcon';
import {
  StyledThumbnailImage,
  StyledThumbnailCategory,
  StyledThumbnail,
  StyledThumbnailText,
} from './styles';

const ThumbnailContent = ({ image, category, title, description, redirectUrl, position, download }) => (
  <StyledThumbnail position={position}>
    {image && (
      <StyledThumbnailImage position={position} className="ThumbnailImageContainer">
        <img width="100%" src={image} alt={title} />
      </StyledThumbnailImage>
    )}
    <StyledThumbnailText position={position} className="ThumbnailTextContainer">
      {category && (
        <StyledThumbnailCategory position={position}>{category}</StyledThumbnailCategory>
      )}
      {title && (
        <p className="thumbnail-title">
          {redirectUrl && !download ? (
            <CTA href={redirectUrl}>
              {title}
            </CTA>
          ) : (
              <span>{title}</span>
            )}
        </p>
      )}
      {description && <p className="thumbnail-text">{description}</p>}
      {download && <ButtonWithIcon icon='download' btnText="Download .pdf" btnLink={download} target="_blank" />}
    </StyledThumbnailText>
  </StyledThumbnail>
);

ThumbnailContent.defaultProps = {
  position: 'vertical',
  image: '',
  title: '',
  description: '',
  redirectUrl: '',
  category: '',
  download: false,
};

ThumbnailContent.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  redirectUrl: PropTypes.string,
  image: PropTypes.string,
  download: PropTypes.bool,
  position: PropTypes.oneOf(['vertical', 'horizontal']),
};

export default ThumbnailContent;
