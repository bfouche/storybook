import styled from 'styled-components';

const heroContentMixin = (position) => {
  let styles;
  switch (position) {
    case 'full':
      styles = `
        width: 100%;
        max-width: 85em;
        display: flex;
        flex-flow: row wrap;
        @media (min-width: 320px) {
          margin: 0 auto 0 1.25em;
        }
        @media (min-width: 768px) {
          margin: 0 auto;
        }
        @media (min-width: 992px) {
          margin: -5.875em auto 0 auto;
        }
      `;
      break;
    case 'left':
      styles = `
      width: 50%;
      @media (min-width: 320px) {
        margin-top: -0.75em;
      }
      @media (min-width: 768px) {
        margin-top: 0;
        transform: translateY(-100%);
      }
      `;
      break;
    case 'right':
      styles = `
      float: right;
      width: 50%;
          @media (min-width: 320px) {
            margin-top: -0.75em;
          }
          @media (min-width: 768px) {
            margin-top: -65%;
          }
          @media (min-width: 992px) {
            margin-top: -25em;
          }
        `;
      break;
    default:
      break;
  }

  return styles;
};

const heroImgMixin = (position) => {
  let styles;
  switch (position) {
    case 'full':
      styles = `
        max-width: 100%;
      `;
      break;
    case 'left':
      styles = `
        max-width: 89%;
      `;
      break;
    case 'right':
      styles = `
        max-width: 89%;
        `;
      break;
    default:
      break;
  }

  return styles;
};

const heroSubtitleMixin = (position) => {
  let styles;
  switch (position) {
    case 'full':
      styles = `
        margin: 0.263em 0 0 0;
        background: none;
      `;
      break;
    default:
      break;
  }

  return styles;
};

const rowHeroContentMixin = (position) => {
  let styles;

  switch (position) {
    case 'full':
      styles = `
        margin-left: 0;
        margin-right: 0;
        width: 100%;
      `;
      break;
    case 'left':
      styles = `
        margin-left: 8.2%;
      `;
      break;
    case 'right':
      styles = `
        margin-left: 0;
        margin-right: 0;
        `;
      break;
    default:
      break;
  }

  return styles;
};

const heroContentTopMixin = (position) => {
  let styles;

  switch (position) {
    case 'full':
      styles = `
        padding: 0;
      `;
      break;
    case 'left':
      styles = `
      padding: 2.375em;
      `;
      break;
    case 'right':
      styles = `
        padding: 2.375em 2.375em 2.375em 11%;
        `;
      break;
    default:
      break;
  }

  return styles;
};

export const StyledHeroContent = styled.div`
  position: relative;
  ${(props) => heroContentMixin(props.imagePosition)}
  .herocontentmain {
    background-color: ${(props) => (props.imagePosition === 'full' ? '#f9f9f9' : 'inherit')};
    padding: ${(props) => (props.imagePosition === 'full' ? '2.375em' : 0)};
    margin-right: ${(props) => (props.imagePosition === 'right' ? 1.25 : 0)}em;
  }
  .herocontenttop {
    background-color: #f9f9f9;
    ${(props) => heroContentTopMixin(props.imagePosition)}
  }
  .herosubtitle {
    padding: 0;
    padding-left: ${(props) => (props.imagePosition === 'right' ? '11%' : 0)};
    font-family: IPSlightitalic;
    font-size: 1.375em;
    line-height: 1.273em;
    color: #253746;
    background: #ffffff;
    ${(props) => heroSubtitleMixin(props.imagePosition)}
  }
  .herocategory,
  .herodate {
    display: inline-block;
    vertical-align: middle;
    font-size: 0.875em;
    font-family: 'barlowlight';
  }
  .herocategory {
    background-color: #e8e9ef;
    color: #253746;
    padding: 0.271em 0.714em 0.214em 0.714em;
    margin: 0 0.714em 0 0;
  }
  .heroDate {
    color: #6d6e71;
    padding: 0;
    margin: 0;
  }
  .herotitle {
    padding: 0.25em 0;
    margin: 0.2em 0 0 0;
    font-family: 'barlowmedium';
    font-weight: normal;
    font-size: 1.75em;
    line-height: 1.12em;
    color: #000000;
  }

  .herocontentoption {
    padding: 2.375em 1em;
    background-color: #ffffff;
    margin-right: 3.125em;
    min-height: 100%;
  }
  .herotitleoption {
    margin: 0;
    padding: 0;
    color: #000000;
    line-height: 1.333em;
    font-family: 'barlowsemibold';
    font-size: 1.125em;
    &.titleoptionv2 {
      font-family: 'barlowmedium';
      font-size: 28px;
      line-height: 32px;
      margin-bottom: 30px;
    }
  }
  .herolistlink,
  .herolistitem {
    margin: 0;
    padding: 0;
    list-style: none;
    list-style-type: none;
  }
  .herolistlink {
    margin-top: 0.313em;
  }
  .herolinkitem {
    display: block;
    margin-top: 0.625em;
    a {
      display: block;
      font-family: 'barlowlight';
      line-height: 1.25em;
      color: #d24100;
      span {
        margin-right: 0.625em;
        display: inline-block;
        vertical-align: middle;
        width: 1.375em;
        height: 0.375em;
        background: url(/images/fleche-petite.svg) 0 0 no-repeat;
      }
    }
  }
  .rowHeroContent {
    ${(props) => rowHeroContentMixin(props.imagePosition)}
  }
  @media (min-width: 768px) {
    .herocontentoption {
      margin-right: 0;
      padding: 2.375em;
    }
    .herotitle {
      font-size: 3.125em;
      padding: 0;
    }
    .herosubtitle {
      font-size: 2.375em;
      line-height: 1.053em;
      padding-left: 0;
    }
    .herotitleoption {
      line-height: 1.688em;
      font-size: 1em;
    }
    .herocontentmain {
      min-height: ${(props) => (props.imagePosition === 'full' ? '17.813em' : 'inherit')};
      height: ${(props) => (props.imagePosition === 'full' ? '100%' : 'inherit')};
      display: ${(props) => (props.imagePosition === 'full' ? 'flex' : 'block')};
      align-items: ${(props) => (props.imagePosition === 'full' ? 'center' : 'inherit')};
      flex-wrap: ${(props) => (props.imagePosition === 'full' ? 'wrap' : 'inherit')};
    }
    .herocontenttop {
      padding-left: ${(props) => (props.imagePosition === 'full' ? 0 : '2.375em')};
      width: ${(props) => (props.imagePosition === 'full' ? '100%' : 'inherit')};
    }
  }
`;

export const StyledHero = styled.div`
  /* Quick fix for left, rewritei with flexbox */
  @media (min-width: 768px) {
    .decoration {
      position: ${(props) => (props.imagePosition === 'left' ? 'absolute' : 'inherit')};
      width: ${(props) => (props.imagePosition === 'left' ? '100%' : 'auto')};
    }
  }
  /* END Quick fix */

  img {
    width: 100%;
  }

  @media (max-width: 991px) {
    padding-top: 5rem;
  }
`;
