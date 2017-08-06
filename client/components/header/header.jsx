module.exports = (() => {
  'use strict';
  require('./header.css');
  const React = require('react');
  const logo = require('./logo.jpg');

  class Header extends React.Component {
    render() {
      return (
      <div className="container-fluid">
        <img src={logo} alt="..." className="img-rounded logo"/>
        <a className="btn btn-default" href="https://github.com/capsu97">My Github</a>
        <a className="btn btn-default" href="https://github.com/capsu97/react_webpack_starter">This project</a>
      </div>
      );
    }
  }

  return Header;
})();
