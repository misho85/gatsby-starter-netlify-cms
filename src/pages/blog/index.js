import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';
{
  /* <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"></div> */
}
export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Latest Stories</h1>
            </div>
          </div>
        </section>
        <section className="section has-background-blue-lighter">
          <div className="container">
            <div className="columns is-multiline">
              {posts.map(({ node: post }) => (
                <div className="column is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                  <Link to={post.fields.slug}>
                    <div class="card is-shady is-fullheight" key={post.id}>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://source.unsplash.com/random"
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="content">
                          <h4>{post.frontmatter.title}</h4>
                          <p>
                            {post.excerpt}
                            <br />
                            <br />
                            <small>{post.frontmatter.date}</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`;
