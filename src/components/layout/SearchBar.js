import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs, getLogs } from '../../actions/logActionCreator';

const SearchBar = ({ searchLogs, getLogs }) => {
  const text = useRef('');

  const onSearchChange = event => {
    searchLogs(text.current.value);
  };

  const onSubmit = event => {
    event.preventDefault();
  };

  const onCloseSearch = () => {
    text.current.value = '';
    getLogs();
  };

  return (
    <nav style={{ marginBottom: '30px' }} className="blue">
      <div className="nav-wrapper">
        <form onSubmit={onSubmit}>
          <div className="input-field">
            <input
              id="search"
              type="search"
              onChange={onSearchChange}
              placeholder="Search Logs..."
              ref={text}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons" onClick={onCloseSearch}>
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

export default connect(null, { searchLogs, getLogs })(SearchBar);
