import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div>
           <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <a className="navbar-brand mr-auto mr-lg-0" href="#">
            Offcanvas navbar
          </a>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Notifications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Switch account
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="https://example.com"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Settings
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="nav-scroller bg-white shadow-sm">
          <nav className="nav nav-underline">
            <a className="nav-link active" href="#">
              Dashboard
            </a>
            <a className="nav-link" href="#">
              Friends
              <span className="badge badge-pill bg-light align-text-bottom">
                27
              </span>
            </a>
            <a className="nav-link" href="#">
              Explore
            </a>
            <a className="nav-link" href="#">
              Suggestions
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
          </nav>
        </div>
      </div>
    )
  }
}
