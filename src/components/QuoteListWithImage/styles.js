import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > div {
    flex: 1 1 50%;
    margin-bottom: 2em;
  }

  @media (max-width: 991px) {
    display: block;
  }
  .multiQuotes-ctaContainer {
    position: relative;
    z-index: 99;
  }
`;
