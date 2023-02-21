import styled from 'styled-components';

export default styled.div`
  .textKeyNumber {
    &__innerContent {
      background-color: #ffffff;
      border: 0.063em solid #f4f4f5;
      padding: 2.062em 2.375em 2.375em 2.375em;
    }
    &__theTitleOne {
      font-family: 'barlowmedium';
      font-size: 1.75em;
      line-height: 1.143em;
      margin-bottom: 0.5em;
      color: #253746;
      padding-top: 1.062em;
      @media screen and (max-width: 36em) {
        width: 100%;
        display: block;
        text-align: center;
      }
    }
    &__wysiwyg {
      line-height: 1.625em;
      font-family: 'barlowlight';
      @media screen and (max-width: 36em) {
        text-align: justify;
      }
    }
    &__theTitleTwo {
      color: #000000;
      font-size: 1.25em;
      line-height: 1.3em;
      font-family: 'barlowmedium';
      @media screen and (max-width: 36em) {
        width: 100%;
        display: block;
        text-align: center;
      }
    }
    &__keyInfosContainer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &__keyInfo {
      width: 40%;
      text-align: center;
      @media screen and (max-width: 36em) {
        width: 100%;
      }
    }
    &__infoNumber {
      font-size: 3.5em;
      font-family: 'IPSlightitalic';
      color: #652459;
      margin-bottom: 0;
    }
    &__infoTitle {
      font-size: 1em;
      font-family: 'barlowmedium';
      color: #652459;
    }
  }
`;
