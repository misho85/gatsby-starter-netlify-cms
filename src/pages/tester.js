import React from 'react';
import Layout from '../components/Layout';

const API_KEY = 'AIzaSyAN3X4HRawnvyPOaZRdmejAlHdZjzG30-E';
const adresa = 'place_id:ChIJfXAOdyJlWkcRkDA2l7qf9SI';
const _url = `https://www.google.com/maps/embed/v1/place?q=${adresa}&key=${API_KEY}`;

class Tester extends React.Component {
  render() {
    return (
      <Layout>
        <iframe
          title="Mapa"
          frameBorder="0"
          style={{
            width: '100%',
            height: '50vh',
            paddingTop: '3rem'
          }}
          src={_url}
          allowFullScreen
        />
      </Layout>
    );
  }
}

export default Tester;
