import React, { useState } from 'react';

import { Square } from './Square';
import { calculateWinner } from './calculate-winner';


const initialSquares = Array(9).fill('');


export function Board() {
    const [squares, setSquares] = useState(initialSquares);
    const [currentPlayer, setCurrentPlayer] = useState('X');

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${currentPlayer}`;

    function handleClick(squarePosition) {
        const squaresCopy = squares.slice();

        if (winner) {
            return;
        }

        squaresCopy[squarePosition] = currentPlayer === 'X' ? 'X' : 'O';

        setSquares(squaresCopy);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }

    function renderSquare(squarePosition) {
        return <Square value={squares[squarePosition]} onClick={() => handleClick(squarePosition)}/>
    }

    return (
        <div>
            <div className="status">{status}</div>

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
