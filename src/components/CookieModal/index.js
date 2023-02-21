/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import cookieConfig from '../../config/cookie-config.json';
import SyledModal from './styles';
import CookieCategory from './CookieCategory';
import CookieService from './CookieService';
import CTA from '../CTA';

const CookieModal = () => {
  let hasCookies = true;
  const [cookies, setCookie] = useCookies(['gdpr']);
  if (!cookies.gdpr) {
    hasCookies = false;
  }
  const [show, setShow] = useState(!hasCookies);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiesService, setCookiesService] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleExit = () => {
    setCookie('gdpr', cookiesService, { path: '/' });
  };
  const handleRejectAll = () => {
    setCookiesService({});
    setShow(false);
  };
  const handleAcceptAll = () => {
    const cookiesToAccept = {};
    cookieConfig.categories.forEach(({ services }) => {
      if (services.length) {
        services.forEach((service) => {
          if (showSettings) {
            cookiesToAccept[service.id] = cookiesService[service.id] ? cookiesService[service.id] : false;
          } else {
            cookiesToAccept[service.id] = true;
          }
        });
      }
    });
    setCookiesService(cookiesToAccept);
    setShow(false);
  };
  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  }

  return (
    <SyledModal>
      <Button className="Button-cookie" title="Privacy" onClick={handleShow}>
        Privacy
      </Button>
      <Modal show={show} onHide={handleClose} onExit={handleExit} className="cookiesModal">
        <Modal.Header closeButton />
        <Modal.Title />
        <Modal.Body>
          {showSettings ? (
            <div className="cookieConfigBlock">
              <h2>{cookieConfig.title}</h2>
              <p className="cookieConfigText">{cookieConfig.text}</p>
              <div className="table-services">
                {cookieConfig.categories.map(({ name, services }) => (
                  <CookieCategory key={name} name={name}>
                    {services &&
                      services.length > 0 &&
                      services.map((service) => (
                        <CookieService
                          key={service.id}
                          onChange={(value) => {
                            cookiesService[service.id] = value;
                          }}
                          checked={!!(cookies && cookies.gdpr && cookies.gdpr[service.id])}
                          {...service}
                        />
                      ))}
                  </CookieCategory>
                ))}
              </div>
            </div>
          )
            : (
              <div className="bandeauConfigBlock">
                <p>{cookieConfig.cookieBannerText}</p>
                <p>
                  For more information see our <CTA href="/cookies" target="_blank">Cookies and Privacy Policy</CTA>.
                  You can change your preferences at any time here.
                </p>
              </div>
            )}
        </Modal.Body>
        <Modal.Footer>
          <div>
            <Button onClick={handleAcceptAll}>
              <span>
                I agree
                <span aria-hidden="true" />
              </span>
            </Button>
            <Button onClick={handleRejectAll}>
              <span>
                I decline
                <span aria-hidden="true" />
              </span>
            </Button>
            {!showSettings ? (
              <Button onClick={handleShowSettings}>
                <span>
                  Change settings
                  <span aria-hidden="true" />
                </span>
              </Button>
            )
              : <></>}
          </div>
        </Modal.Footer>
      </Modal>
    </SyledModal>
  );
};

export default CookieModal;
