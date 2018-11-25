import React from 'react';
import config from '../../meta/config';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <p>{config.siteTitle}</p>
            </div>
            <div className="column is-one-third" />
            <div className="column is-one-third">
              <p>{config.siteDescription}</p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="subfooter">
        <div className="container">
          <div className="content has-text-centered">
            <p>{config.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
