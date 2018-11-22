import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

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
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
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
          <div className="navbar-start">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link className="button is-primary is-outlined" to="/contact">
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;