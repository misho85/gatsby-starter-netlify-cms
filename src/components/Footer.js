import React from 'react';
import { _title, description, copyright } from '../../config/website';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <p>{_title}</p>
            </div>
            <div className="column is-one-third" />
            <div className="column is-one-third">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="subfooter">
        <div className="container">
          <div className="content has-text-centered">
            <p>{copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
