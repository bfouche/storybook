import styled from 'styled-components';

export default styled.div`
  margin: 3em 0 !important;

  @media all and (max-width: 767px) {
    background: linear-gradient(to right, transparent 16%, #253746 16%);
    margin: 0 !important;
  }
  .textImages {
    display: flex;
    &__squaresContainer {
      /*width: 100%;
      display: flex;
      flex-wrap: wrap;*/
      z-index: 2;
      position: relative;
      margin-top: auto;
      margin-bottom: auto;
      padding: 2.5em 0 3em 0;
      @media all and (max-width: 767px) {
        padding-left: 0;
        margin-top: 12%;
      }
      @media all and (min-width: 768px) {
        transform: translateX(7%);
      }
    }
    &__square {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: auto;
      flex: 1 1 auto;
      &--btn {
        background-color: #ffc14d;
        display: block;
        width: 100%;
        height: 100%;
        @media screen and (max-width: 48em) {
          padding: 65px 0;
        }
      }
    }
    &__squareTextContainer {
      position: absolute;
      bottom: 10px;
      left: 0;
      max-width: 60%;
      display: inline;
    }
    &__squareText {
      padding: 5px 10px;
      color: #253746;
      background-color: white;
      font-size: 1.2em;
      line-height: 1.8em;
      font-family: 'barlowlight';
      white-space: pre-wrap;
      position: relative;
      &--btn {
        text-decoration: none;
        padding: 7px 75px 10px 20px;
        background-color: transparent;
        font-size: 1.4em;
        color: #1e303d;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 1.2;
        ::after {
          transition: 0.3s;
          content: '';
          position: absolute;
          bottom: 2px;
          right: 20px;
          width: 50px;
          height: 40px;
          background-repeat: no-repeat;
          background-position: left 60%;
          background-image: url('/images/fleche-grande.svg');
        }
        &:hover {
          ::after {
            right: 5px;
          }
        }
      }
    }
    &__squareImage {
      width: 100%;
    }
    &__contentContainer {
      background-color: #253746;
      color: white;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 12% 0 12%;
    }
    &__title {
      font-family: 'IPSlightitalic';
      font-size: 3em;
      @media all and (max-width: 48em) {
        font-size: 2em;
        padding-top: 25px;
      }
    }
    &__text {
      font-family: 'barlowextralight';
      font-size: 1.3em;
      padding-top: 25px;
    }
  }
`;
