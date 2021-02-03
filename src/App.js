import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title: 'Article 1',
          content: 'Content 1',
        },
        {
          title: 'Article 2',
          content: 'Content 2',
        },
      ],
    };
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        { articles.map(element => <li key={element.title}>{ element.title }</li>) }
      </div>
    );
  }
}

export default App;
