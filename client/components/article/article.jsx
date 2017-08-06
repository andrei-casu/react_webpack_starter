module.exports = (() => {
  'use strict';
  require('./article.css');
  const React = require('react');

  class Article extends React.Component {
    render() {
      const {title, text} = this.props;
      return (
      <div>
        <h2 className="article_title">{title}</h2>
        <p className="article_text">{text}</p>
      </div>
      );
    }
  };

  return Article;
})();
