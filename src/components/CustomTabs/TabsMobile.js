import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Accordion, Card } from 'react-bootstrap';
import { StyledCard } from './styles';
import DynamicComponents from '../Drupal/DynamicComponents';

class TabsMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openKey: props.defaultKey, isOpen: true };
  }

  setOpenKey = (openKey, isOpen) => {
    if (isOpen) {
      this.setState({ openKey, isOpen: false });
    } else {
      this.setState({ openKey, isOpen: true });
    }
  };

  render() {
    const { child, defaultKey } = this.props;
    const { openKey, isOpen } = this.state;

    return (
      <StyledCard>
        <Row className="mr40">
          <Col lg={12}>
            <Accordion defaultActiveKey={defaultKey}>
              {child.map((item) => (
                <Card key={`keyAccordion${item.entity.fieldCptTabsTitle}`}>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey={item.entity.fieldCptTabsTitle}
                    className={
                      openKey === item.entity.fieldCptTabsTitle && isOpen === true
                        ? 'isopened'
                        : 'isclosed'
                    }
                    onClick={() => this.setOpenKey(item.entity.fieldCptTabsTitle, isOpen)}
                  >
                    {item.entity.fieldCptTabsTitle}
                    <span className="float-right " />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={item.entity.fieldCptTabsTitle}>
                    <Card.Body>
                      <DynamicComponents components={item.entity.fieldCptTabsParagraphs} />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Col>
        </Row>
      </StyledCard>
    );
  }
}

TabsMobile.propTypes = {
  defaultKey: PropTypes.string.isRequired,
  child: PropTypes.array.isRequired,
};

export default TabsMobile;
