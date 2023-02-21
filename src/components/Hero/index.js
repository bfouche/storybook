/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import CTA from '../CTA';
import { StyledHero, StyledHeroContent } from './styles';
import StyledScrollDownForMore from '../ScrollDownForMore';


const floatImg = (position) => {
  let result = '';
  if (position === 'right') {
    result = 'floatr';
  }
  return result;
};

const titleOption = (titleOptionVersion) => {
  let result = 'herotitleoption';
  if (titleOptionVersion) {
    result = 'herotitleoption titleoptionv2';
  }
  return result;
};

const Hero = ({
  imageSet,
  mainTitle,
  subtitle,
  category,
  date,
  sectionTitle,
  links,
  imagePosition,
  titleOptionVersion,
  IsScrollDown,
}) => {

  return (
    // eslint-disable-next-line react/jsx-indent
    <StyledHero imagePosition={imagePosition}>
      <div className="max-w-full">
        {imagePosition === 'full' ? <img className="" src={imageSet.url} alt={imageSet.alt} /> : <img src={imageSet.url} alt={imageSet.alt} className={floatImg(imagePosition)} />}
      </div>
      <StyledHeroContent imagePosition={imagePosition} sectionTitle={sectionTitle}>
        <div className={`rowHeroContent grid grid-cols-3`}>
          <div className={`col-span-${sectionTitle ? '2' : '3'}`}>
            <div className="herocontentmain">
              <div>
                <div className="herocontenttop">
                  <div className="herocontentline">
                    {category && (
                      <span className="herocategory">{category}</span>
                    )}
                    {date && (
                      <span className="heroDate">{date}</span>
                    )}
                  </div>
                  <h1 className="herotitle">{mainTitle}</h1>
                </div>
                {subtitle && (
                  <div className="herocontenttop">
                    <h2 className="herosubtitle">{subtitle}</h2>
                  </div>
                )}
              </div>
            </div>
          </div>
          {sectionTitle && (
            <div className="col-span-1">
              <div className="herocontentoption">
                <p className={titleOption(titleOptionVersion)}>{sectionTitle}</p>
                <ul className="herolistlink">
                  {links.map((l, index) => (
                    <li className="herolinkitem" key={`hero-section-title-links-${index}`}>
                      <CTA href={l.url}>
                        {l.title}
                        <span aria-hidden="true" />
                      </CTA>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </StyledHeroContent>
      {IsScrollDown && (
        <div className="grid grid-cols-12">
          <div className="col-span-11">
            <StyledScrollDownForMore text="Scroll down for more" />
          </div>
        </div>
      )}
    </StyledHero>
  );
}

Hero.defaultProps = {
  imagePosition: 'full',
  subtitle: null,
  sectionTitle: null,
  links: null,
  imageSet: null,
  date: null,
  category: null,
  titleOptionVersion: false,
  IsScrollDown: false,
};

Hero.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  imagePosition: PropTypes.oneOf(['full', 'left', 'right']),
  imageSet: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
  subtitle: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  sectionTitle: PropTypes.string,
  links: PropTypes.array,
  titleOptionVersion: PropTypes.bool,
  IsScrollDown: PropTypes.bool,
};
export default Hero;
