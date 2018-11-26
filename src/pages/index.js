import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => (
  <Layout>
    <section className="hero is-primary is-bold is-large">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section is-centered">
                <h1 className="title">Home Page</h1>
                <h2 className="subtitle">Pochetna strana</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default HomePage;
