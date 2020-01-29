import React from "react";
import "./SearchForm.css";

const searchForm = props => {
  const onSubmit = event => {
    event.preventDefault();
    props.onFormSubmit();
  };
  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter search term..."
        onChange={event => props.onSearchValueChange(event.target.value)}
      />
      <div>
        <button disabled={props.isSearching}>Search</button>

        <button
          onClick={props.onSingleSearchClick}
          disabled={props.isSearching}
        >
          I'm Feeling Funny
        </button>
      </div>
    </form>
  );
};

export default searchForm;
