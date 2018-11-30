import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Facebook, Twitter } from 'components/SEO';

const SEO = ({ title, desc, banner, pathname, article }) => (
  <StaticQuery
    query={graphql`
      query SEO {
        site {
          buildTime(formatString: "YYYY-MM-DD")
          pathPrefix
          siteMetadata {
            defaultTitle: title
            titleAlt
            shortName
            author
            siteLanguage
            logo
            siteUrl: url
            defaultDescription: description
            defaultBanner: banner
            twitter
            fbAppID
          }
        }
      }
    `}
    render={({
      site: {
        buildTime,
        pathPrefix,
        siteMetadata: {
          defaultTitle,
          titleAlt,
          shortName,
          author,
          siteLanguage,
          logo,
          siteUrl,
          defaultDescription,
          defaultBanner,
          twitter,
          fbAppID
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: defaultDescription || desc,
        image: `${siteUrl}${banner || defaultBanner}`,
        url: `${siteUrl}${pathname || '/'}`
      };

      const realPrefix = pathPrefix === '/' ? '' : pathPrefix;

      let schemaOrgJSONLD = [
        {
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          '@id': siteUrl,
          url: siteUrl,
          name: defaultTitle,
          alternateName: titleAlt || ''
        }
      ];

      if (article) {
        schemaOrgJSONLD = [
          {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            '@id': seo.url,
            url: seo.url,
            name: title,
            alternateName: titleAlt || '',
            headline: title,
            image: {
              '@type': 'ImageObject',
              url: seo.image
            },
            description: seo.description,
            datePublished: buildTime,
            dateModified: buildTime,
            author: {
              '@type': 'Person',
              name: author
            },
            publisher: {
              '@type': 'Organization',
              name: author,
              logo: {
                '@type': 'ImageObject',
                url: siteUrl + realPrefix + logo
              }
            },
            isPartOf: siteUrl,
            mainEntityOfPage: {
              '@type': 'WebSite',
              '@id': siteUrl
            }
          }
        ];
      }

      return (
        <>
          <Helmet title={seo.title}>
            <html lang={siteLanguage} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="apple-mobile-web-app-title" content={shortName} />
            <meta name="application-name" content={shortName} />
            <script type="application/ld+json">
              {JSON.stringify(schemaOrgJSONLD)}
            </script>
          </Helmet>
          <Facebook
            desc={seo.description}
            image={seo.image}
            title={seo.title}
            type={article ? 'article' : null}
            url={seo.url}
            appID={fbAppID}
          />
          <Twitter
            title={seo.title}
            image={seo.image}
            desc={seo.description}
            username={twitter}
          />
        </>
      );
    }}
  />
);

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool
};

SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  article: false
};

export default SEO;
