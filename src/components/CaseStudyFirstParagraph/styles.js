import styled from 'styled-components';

export default styled.div`
  margin-right: 3%;
  .CaseStudyFirstParagraphInnerContent {
    background-color: #ffffff;
    border: 0.063em solid #f4f4f5;
    padding: 2.062em 2.375em 2.375em 2.375em;
    margin-top: 1em;

    span {
      word-break: break-word;
    }
  }
  .CaseStudyFirstParagraphtheTitleOne {
    font-family: 'barlowmedium';
    font-size: 1.75em;
    line-height: 1.143em;
    margin-bottom: 0.5em;
    color: #253746;
  }
  .wysiwyg {
    line-height: 1.625em;
    font-family: 'barlowlight';
  }
  .CaseStudyFirstParagraphtheTitleTwo {
    color: #000000;
    font-size: 1.25em;
    line-height: 1.3em;
    font-family: 'barlowmedium';
  }

  @media (min-width: 992px) {
    .CaseStudyFirstParagraphInnerContent {
      margin-top: 0;
    }
  }
`;
