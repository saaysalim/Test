import React, { useState, ChangeEvent, FC } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

// Sample data array
const sampleData = [
  'UL',
  'CSID',
  'ISE',
  'student',
  'programing',
  'EPIC',
  'Java',
  'Python',
];

const SearchBar: FC = () => {
  const [input, setInput] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const executeSearch = () => {
    const filteredResults = sampleData.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="App">
      <div className="search-bar-container">
        <div className="search-input-container">
          <FaSearch className="search-icon" />
          <input
            className="search-input"
            placeholder="Type to search..."
            value={input}
            onChange={handleChange}
          />
          <button className="search-button" onClick={executeSearch}>Search</button>
        </div>
        <div className="search-results">
          {results.length > 0 ? (
            results.map((result, index) => (
              <div key={index} className="search-result-item">
                {result}
              </div>
            ))
          ) : (
            <div className="no-results">No results found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
