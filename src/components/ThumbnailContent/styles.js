import styled from 'styled-components';

export const StyledThumbnail = styled.div`
  display: ${(props) => (props.position === 'vertical' ? 'block' : 'flex')};
  ${(props) => (props.position === 'horizontal' ? 'flex: wrap' : '')};
  @media (max-width: 35.938em) {
    display: block;
    ${(props) => (props.position === 'horizontal' ? 'max-width: 18.125rem; margin: auto;' : '')};
  }
`;

export const StyledThumbnailImage = styled.div`
  ${(props) =>
    props.position === 'horizontal' ? 'flex: 1; margin-right: 2.5em; max-width: 11.25em;' : ''};
`;

export const StyledThumbnailText = styled.div`
  ${(props) => (props.position === 'horizontal' ? 'flex: 1; order: 2;' : '')}

  .thumbnail-title {
    font-family: 'barlowmedium';
    font-size: 1.25em;
    line-height: 1.3em;
    margin: 0.8em 0 0 0;
    a {
      color: #000000;
    }
  }
  p {
    font-family: 'barlowlight';
    font-size: 0.875em;
    line-height: 1.714em;
    margin: 0.5em 0 0 0;
  }
`;

export const StyledThumbnailCategory = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 0.875em;
  font-family: 'barlowlight';
  background-color: #e8e9ef;
  color: #253746;
  padding: 0.271em 0.714em 0.214em 0.714em;
  ${(props) =>
    props.position === 'horizontal' ? ' margin: 0 0.714em 0 0;' : ' margin: 1.429em 0.714em 0 0;'}
`;
