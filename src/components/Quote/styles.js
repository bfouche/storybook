import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: text-start;
  img {
    margin: auto;
    display: block;
    width: 100%;
    max-width: 11.25em;
  }
  .blockquoteContainer {
    flex: 1;
  }
  blockquote {
    padding: 1.7em 2.1em 0 2.1em;
    line-height: normal;
    margin: 0;
    position: relative;
    display: inline-block;
    margin-bottom: 1.7em;
    p,
    small {
      position: relative;
      z-index: 2;
    }
    p {
      color: #002e5f;
      font-size: 1.25em;
      line-height: 1.3em;
      margin: 0;
      padding: 0;
      font-family: 'IPSlight';
    }
    small {
      color: #6d6e71;
      font-size: 0.875em;
      line-height: 1.857em;
      margin: 0;
      padding: 0;
      top: 0.429em;
      font-family: 'barlowlightitalic';
      font-weight: normal;
    }
    &:before,
    &:after {
      position: absolute;
      z-index: 1;
      color: #c9cad9;
      font-size: 11.25em;
      opacity: 0.3;
      font-family: 'IPSlight';
      line-height: 0.7em;
    }
    &:before {
      top: 0;
      left: 0;
      content: '\\201c';
    }
    &:after {
      right: 0;
      top: 100%;
      margin-top: -0.1em;
      content: '\\201d';
    }
  }

  @media (max-width: 567px) {
    display: block;

    img {
      margin-bottom: 1em;
    }

    blockquote {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
