import React from 'react';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActionCreator';
import M from 'materialize-css/dist/js/materialize';
import PropTypes from 'prop-types';

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const onDeleteTech = event => {
    deleteTech(id);
    M.toast({ html: 'Technician was deleted' });
  };

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDeleteTech}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired
};

export default connect(null, { deleteTech })(TechItem);
