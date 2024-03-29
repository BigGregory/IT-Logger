import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActionCreator';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize';

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (!firstName || !lastName) {
      M.toast({ html: 'Please enter the first and last name' });
    } else {
      addTech({
        firstName,
        lastName
      });
      clearFields();
      M.toast({ html: 'The technician was added' });
    }
  };

  const clearFields = () => {
    setFirstName('');
    setLastName('');
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">
          Enter
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addTech })(AddTechModal);
