module.exports = (()=> {
  'use strict';
  require('./app.css');
  const React = require('react');
  const Header = require('./header/header.jsx');
  const Article = require('./article/article.jsx');

  class App extends React.Component {
    render() {
      return (
      <div id="app">
        <Header/>
        <h1>Hello World</h1>
        <p>This is a sample article</p>
        <Article title={"Good title"} text={"This is just a test"}/>
      </div>
      );
    }
  };

  return App;
})();
