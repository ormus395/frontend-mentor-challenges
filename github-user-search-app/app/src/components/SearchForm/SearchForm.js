import "./searchForm.css";
import React, { useState } from "react";
import Button from "../Button/Button";
// this search form has its own state, as well as state passed to it using
// its parent app component
// this is required because another component needs the results from this component

// the search form takes a username from the user, and passes it to the app componenet fro the app componenet to fetch
// the possible user from the github api
// this form also shows an error state which will be passed to it from the app component

/* search bar state
    the search bar has the input field
    error (this is passed to it by oarent tho)

*/

function SearchForm({ error, searchGithubUser }) {
  const [searchState, setSearchState] = useState({
    username: "",
    error: error,
  });

  const handleChange = (e) => {
    setSearchState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    searchGithubUser(searchState.username);
  };

  return (
    <div className="search-container">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <span className="search-icon"></span>
        <input
          value={searchState.username}
          name="username"
          placeholder="Search GitHub username..."
          onChange={(e) => handleChange(e)}
        />
        {error ? <span className="error">No results</span> : null}
        <Button text="Search" />
      </form>
    </div>
  );
}

export default SearchForm;
