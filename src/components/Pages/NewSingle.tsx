import React from 'react';
// Define the structure of the item prop
interface Item {
  urlToImage: string;
  title: string;
  source: {
    name: string;
  };
  url: string;
}
  
// Define the props for the NewSingle component
interface NewSingleProps {
  item: Item;
 // item: Article;
}
const NewSingle: React.FC<NewSingleProps> = ({ item }) => (
  <div className="col s4">
    <div className="card medium">
      <div className="card-image">
        <img src={item.urlToImage} alt={item.title} />
        <span className="card-title">{item.source.name}</span>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
      </div>
      <div className="card-action">
        <a href={item.url} target="_blank" rel="noreferrer">Full article</a>
      </div>
    </div>
  </div>
);

export default NewSingle;
