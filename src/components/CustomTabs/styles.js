import styled from 'styled-components';

export const StyledCard = styled.div`
  .card {
    border: 0;
    border-radius: 0;
    &:first-child {
      border-top: 0.053em solid #ebebf0;
    }
  }
  .card-header {
    font-size: 1.188em;
    line-height: 1.421em;
    padding: 1.316em 1.579em;
    border-bottom: 0.053em solid #ebebf0;
    position: relative;
    background-color: #ffffff;
    margin-bottom: 0 !important;
    cursor: pointer;
    .float-right {
      width: 0.737em;
      height: 0.737em;
      border-bottom: 0.105em solid #d24100;
      border-left: 0.105em solid #d24100;
      position: absolute;
      z-index: 1;
      top: 50%;
      right: 1.579em;
      margin-top: -0.368em;
      transform: rotate(-45deg);
    }
    div div {
      padding-right: 2.632em;
    }
    &.isopened {
      font-family: 'barlowsemibold';
      .float-right {
        transform: rotate(135deg);
        border-color: #253746;
        margin-top: -0.184em;
      }
    }
  }
  .card-body .row {
    margin: 2.5rem 0;
  }
`;

export const StyledTabs = styled.div`
  .tab-pane > div {
    margin: 2.5rem 0;
  }
  .nav-tabs {
    border-bottom: 0.053em solid #ebebf0;
    margin-bottom: 3.313em;
    .nav-link {
      color: #253746;
      font-size: 1.375em;
      line-height: 1.091em;
      padding: 0;
      border: 0;
      border-bottom: 0.182em solid #ffffff;
      border-radius: 0;
      &:hover,
      &:focus {
        font-family: 'barlowmedium';
        border-bottom: 0.182em solid #fdc945;
      }
    }
    .nav-item {
      margin-bottom: 0;
      max-width: 10.636em;
      padding: 0.455em 2.455em 0.273em 0;
      margin: 0 1em 0 0;
      align-self: flex-end;
    }
    .nav-link.active,
    .nav-item.show .nav-link {
      color: #253746;
      font-family: 'barlowmedium';
      border: 0;
      border-bottom: 0.182em solid #fdc945;
    }
  }
`;
