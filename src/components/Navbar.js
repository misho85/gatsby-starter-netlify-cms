import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';

class Navbar extends Component {
  state = {
    isActive: false
  };

  toggleDropdown = () => {
    const toggledIsActive = this.state.isActive ? false : true;

    this.setState({
      isActive: toggledIsActive
    });
  };

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Logo" style={{ width: '88px' }} />
              </figure>
            </Link>
            <button
              onClick={this.toggleDropdown}
              className={`button is-white navbar-burger ${
                this.state.isActive ? 'is-active' : ''
              }`}
              data-target="navMenu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            className={`navbar-menu ${this.state.isActive ? 'is-active' : ''}`}
            id="navMenu"
          >
            <div className="navbar-end">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/test">
                TestPage
              </Link>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <Link
                      className="button is-primary is-outlined"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
