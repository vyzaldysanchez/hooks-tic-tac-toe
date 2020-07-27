import React from 'react';
import PropTypes from 'prop-types';


export function Square({ value, onClick }) {
    return (
        <button className="square" onClick={onClick}>{value}</button>
    );
}

Square.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
