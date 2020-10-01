import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
        <div className="formDiv">
        <form className="searchForm">
          <label>TITLES SEARCH</label> <br></br>
          <input type="text" className="inputForm" placeholder="i.e. SONIC The Hedgehog"></input> <br></br>
          <button type="submit" className="buttonForm">SEARCH</button>
        </form>
        </div>
    );
  }

  export default SearchForm;