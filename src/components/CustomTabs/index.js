import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import TabsDesktop from './TabsDesktop';
import TabsMobile from './TabsMobile';

const CustomTabs = ({ data }) => {
  if (isMobile) {
    return <TabsMobile child={data} defaultKey={data[0].entity.fieldCptTabsTitle} />;
  }
  return <TabsDesktop child={data} defaultKey={data[0].entity.fieldCptTabsTitle} />;
};

CustomTabs.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CustomTabs;
