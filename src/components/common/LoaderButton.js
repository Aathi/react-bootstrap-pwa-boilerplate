import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

const LoaderButton  = ({
    type,
    isLoading,
    text,
    loadingText,
    className = "",
    disabled = false,
    ...props
}) => (
    <button
        className={className}
        disabled={disabled || isLoading}
        type={type}
    >
        {isLoading && <span className="glyphicon glyphicon-repeat slow-right-spinner"></span>}
        {isLoading ? loadingText : text}
    </button>
);

export default withRouter(LoaderButton);