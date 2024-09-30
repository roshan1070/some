import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'; // Make sure you're using this

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TextUtils</a>
          {/* <Link className="navbar-brand" to="/">TextUtils</Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              </li>
                  {/* <li className="nav-item"> */}
                    {/* <a className="nav-link" href="/about">About</a> */}
                    {/* <Link className="nav-link" to="/about">About</Link> */}
                  {/* </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className={`form-control me-2 ${props.mode === 'dark' ? 'placeholder-dark' : 'placeholder-light'}`}
                style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch mx-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
