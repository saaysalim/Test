import { Component } from 'react';
interface NewsConfig {
  type: string;
  query: string;
}

interface NewsManagerState {
  news1: NewsConfig;
  news2: NewsConfig;
  news3: NewsConfig;
}

class NewsManager extends Component<object, NewsManagerState> {
  constructor(props: object) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news',
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en',
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en',
      },
    };
  }

  render() {
    return (
      <div className="container-fluid">
        {/* Navigation and News display code */}
      </div>
    );
  }
}

export default NewsManager;
