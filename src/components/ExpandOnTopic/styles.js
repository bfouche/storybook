import styled from 'styled-components';

export default styled.div`
  border: 0.063em solid #f1f1f5;
  padding: 1.875em 1.875em 1.25em 1.875em;

  p {
    font-family: 'barlowmedium';
    font-size: 1.25em;
    line-height: 1.3em;
    margin: 0 0 0.5em 0;
    background-color: #ffffff;
    display: inline-block;
    vertical-align: middle;
  }

  .expand-topic-btn {
    background: #ffffff;
    border: 0.143em solid #fdc945;
    margin: 0 0 0.714em 1.429em;
    font-size: 0.875em;
    line-height: normal;
    font-family: 'barlowlight';
    color: #253746;
    display: inline-block;
    vertical-align: middle;
    padding: 0.357em 0.714em;
    border-radius: 1em;
    &:hover,
    &:focus {
      background-color: #fdc945;
    }
  }
`;
