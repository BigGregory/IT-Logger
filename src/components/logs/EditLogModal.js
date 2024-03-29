import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../actions/logActionCreator';
import M from 'materialize-css/dist/js/materialize';

const EditLogModal = ({ current, updateLog, techs }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setTech(current.tech);
      setAttention(current.attention);
    }
  }, [current]);

  const onSubmit = e => {
    if (!message || !tech) {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      };
      updateLog(updatedLog);

      M.toast({ html: 'Log was successfully edited' });
      clearFields();
    }
  };

  const clearFields = () => {
    setMessage('');
    setTech('');
    setAttention(false);
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}>
              <option value="" disabled>
                Select Technician
              </option>
              {techs.map(tech => (
                <option
                  value={`${tech.firstName} ${tech.lastName}`}
                  key={tech.id}>{`${tech.firstName} ${tech.lastName}`}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: '75%',
  height: '75%'
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
  techs: PropTypes.array
};

const mapStateToProps = state => {
  return {
    current: state.log.current,
    techs: state.tech.techs
  };
};

export default connect(mapStateToProps, { updateLog })(EditLogModal);
