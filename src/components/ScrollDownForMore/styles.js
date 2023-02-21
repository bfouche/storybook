import styled from 'styled-components';

export default styled.div`
  p {
    margin: 0 2.375em;
    padding: 0.625em 0;
    border-bottom: 0.094em solid #f2f2f5;
    span {
      text-transform: uppercase;
      font-family: 'barlowsemibold';
      font-size: 0.688em;
      line-height: 1.182em;
      display: inline-block;
      padding-right: 1.545em;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        z-index: 1;
        top: 50%;
        transform: rotate(-45deg);
        right: 0;
        width: 0.636em;
        height: 0.636em;
        margin-top: -0.636em;
        border-left: 0.091em solid #d24100;
        border-bottom: 0.091em solid #d24100;
      }
    }
  }
`;
