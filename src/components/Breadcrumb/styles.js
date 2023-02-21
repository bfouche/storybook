import styled from 'styled-components';

export const StyledBreadcrumb = styled.ul`
  @media all and (max-width: 62em) {
    display: none;
  }
  li {
    display: inline-block;
    margin: 0 1em;
    list-style-type: none;

    a {
      display: block;
      position: relative;
      color: ${props => props.color};

      &:before {
        content: '';
        width: 0.5em;
        height: 0.5em;
        position: absolute;
        top: 70%;
        left: -1em;
        margin-top: -0.5em;
        border-right: 0.091em solid  ${props => props.color};;
        border-bottom: 0.091em solid ${props => props.color};;
        transform: rotate(-45deg);
        z-index: 1;
      }
    }
  }
`;

export default StyledBreadcrumb;
