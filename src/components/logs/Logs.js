import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { getLogs } from '../../actions/logActionCreator';
import PropTypes from 'prop-types';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs !== null && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs && logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    log: state.log
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLogs: () => dispatch(getLogs())
  };
};

Logs.propTypes = {
  log: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Logs);
