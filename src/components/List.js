import React from 'react';
import { useSelector } from 'react-redux';

// const mapStateToProps = state => (
//   { articles: state.articles }
// );

const List = () => {
  const articles = useSelector(state => state.articles);
  return (
    <ul>
      {articles.map(
        element => (
          <li key={element.title}>{ element.title }</li>
        ),
      )}
    </ul>
  );
};

// const List = connect(mapStateToProps)(connectedList);

export default List;
