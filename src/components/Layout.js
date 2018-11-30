import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from './Footer';
import '../styles/app.sass';
// import '../styles/all.sass';
import { _title, description } from '../../config/website';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{_title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
