import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

const ButtonToNavigate = ({ history, url, label, className }) => (
  <button
    type="button"
    className={className}
    onClick={() => history.push(url)}
  >
    {label}
  </button>
);


ButtonToNavigate.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withRouter(ButtonToNavigate);