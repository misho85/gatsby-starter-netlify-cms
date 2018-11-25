import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from './Footer';
import '../styles/app.sass';
// import '../styles/all.sass';
import config from '../../meta/config';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
