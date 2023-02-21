import styled from 'styled-components';

export default styled.div`
  .colThree {
    &__title {
      font-family: 'barlowmedium';
      padding-bottom: 15px;
      @media screen and (max-width: 48em) {
        font-size: 1.5em;
      }
    }
    &__bloc {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      @media screen and (max-width: 48em) {
        margin-bottom: 25px;
      }
    }
    &__blocImage {
      width: 100%;
      @media screen and (max-width: 48em) {
        width: 50%;
        align-self: center;
      }
    }
    &__blocText {
      font-family: 'barlowlight';
      padding: 20px 0 0 0;
      word-break: break-word;
      @media screen and (max-width: 48em) {
        width: 50%;
        padding: 0 0 0 10px;
        line-height: 1.2;
      }
    }
  }
`;
