import styled from 'styled-components';

const SyledModal = styled.div`
  .Button-cookie {
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    color: #e45027;
    border: 1px solid #e45027;
    font-size: 0.875em;
    letter-spacing: 0.05em;
    font-family: 'barlowlight';
    border-radius: 1px;
    padding: 0.1875rem 0.375rem;
    z-index: 1000;
    &:hover,
    &:focus {
      background-color: #d24100;
      color: #ffffff;
    }
  }
`;

export default SyledModal;
