import React, { Component } from 'react';
import NewSingle from './NewSingle';

// Assuming an Article has at least a URL, adjust according to your data structure
interface Article {
  url: string;
  // Add other relevant properties here
}
interface NewsState {
  news: Article[];
}
// If you eventually need props, define and use NewsProps as well
class News extends Component<object, NewsState> {
  constructor(props: object) {
    super(props);
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.REACT_APP_API}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ news: data.articles });
      })
      .catch((error) => console.log(error));
  }

  renderItems() {
    // Corrected to ensure it returns the NewSingle components
    return this.state.news.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return (
      <div className='row'>
        {this.renderItems()}
      </div>
    );
  }
}

export default News;
