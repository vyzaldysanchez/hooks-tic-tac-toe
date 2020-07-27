import React from 'react';
import PropTypes from 'prop-types';

import { Square } from './Square';


export function Board({ squares, onSquareClick }) {
    function renderSquare(squarePosition) {
        return <Square value={squares[squarePosition]} onClick={() => onSquareClick(squarePosition)}/>
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

Board.propTypes = {
    squares: PropTypes.array.isRequired,
    onSquareClick: PropTypes.func.isRequired,
};
