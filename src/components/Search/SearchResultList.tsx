import React from 'react';
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

// Assuming 'results' is an array of objects with at least a 'name' property
// Replace 'any' with a more specific type as needed for your use case
interface SearchResultsListProps {
  results: { name: string }[]; // Define the structure of objects within the results array
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, index) => (
        <SearchResult result={result.name} key={index} />
      ))}
    </div>
  );
};
