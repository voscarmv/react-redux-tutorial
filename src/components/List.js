import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => (
  { articles: state.articles }
);

const connectedList = ({ articles }) => (
  <ul>
    {articles.map(
      element => (
        <li key={element.title}>{ element.title }</li>
      ),
    )}
  </ul>
);

const List = connect(mapStateToProps)(connectedList);

export default List;
