import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import { StyledTabs } from './styles';
import DynamicComponents from '../Drupal/DynamicComponents';

class TabsDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.defaultKey ? props.defaultKey : '',
    };
  }

  render() {
    const { child } = this.props;
    const { key } = this.state;

    return (
      <StyledTabs>
        <Row className="mr40">
          <Col lg={11}>
            <Tabs activeKey={key} onSelect={(k) => this.setState({ key: k })}>
              {child.map((item) => (
                <Tab
                  key={`key${item.entity.fieldCptTabsTitle}`}
                  eventKey={item.entity.fieldCptTabsTitle}
                  title={item.entity.fieldCptTabsTitle}
                >
                  <DynamicComponents components={item.entity.fieldCptTabsParagraphs} />
                </Tab>
              ))}
            </Tabs>
          </Col>
        </Row>
      </StyledTabs>
    );
  }
}

TabsDesktop.propTypes = {
  defaultKey: PropTypes.string.isRequired,
  child: PropTypes.array.isRequired,
};

export default TabsDesktop;
