import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActionCreator';
import TechItem from './TechItem';
import PropTypes from 'prop-types';

const TechListModal = ({ techs, getTechs, loading }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  techs: PropTypes.array.isRequired,
  getTechs: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    techs: state.tech.techs,
    loading: state.tech.loading
  };
};

export default connect(mapStateToProps, { getTechs })(TechListModal);
