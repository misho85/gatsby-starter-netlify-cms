import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

const Facebook = ({ url, type, title, desc, image, appID }) => (
  <Helmet>
    {url && <meta property="og:url" content={url} />}
    {type && <meta property="og:type" content={type} />}
    {title && <meta property="og:title" content={title} />}
    {desc && <meta property="og:description" content={desc} />}
    {image && <meta property="og:image" content={image} />}
    {appID && <meta property="fb:app_id" content={appID} />}
  </Helmet>
);

Facebook.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  appID: PropTypes.string
};

Facebook.defaultProps = {
  url: null,
  type: null,
  title: null,
  desc: null,
  image: null,
  appID: null
};

export default Facebook;
