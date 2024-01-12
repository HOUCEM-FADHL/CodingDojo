import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = (props) => {
  const { setUrl } = props;
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [searchType, setSearchType] = useState('people');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set the url based on selected search type and id
    setUrl(`https://swapi.dev/api/${searchType}/${id}`);
    // Navigate to the specified route
    navigate(`/${searchType}/${id}`);
    // Clear the id field
    setId('');
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Search for: </label>
          {/* Use select to choose the search type */}
          <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
        </div>
        <div>
          <label>ID: </label>
          {/* Input field to enter the ID */}
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        {/* Button to submit the form */}
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;