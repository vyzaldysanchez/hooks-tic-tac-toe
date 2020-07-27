import React, { useState } from 'react';

import { Board } from './Board';
import { calculateWinner } from './calculate-winner';


const initialHistory = [
    { squares: Array(9).fill('') },
];

function renderHistory({ history, jumpTo }) {
    return history.map((step, move) => {
        const description = move ? `Go to move #${move}` : 'Go to game start';

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });
}


export function Game() {
    const [currentStep, setCurrentStep] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [history, updateHistory] = useState(initialHistory);

    function handleClick(squarePosition) {
        const rewroteHistory = history.slice(0, currentStep + 1);
        const currentHistory = rewroteHistory[rewroteHistory.length - 1];
        const squaresCopy = currentHistory.squares.slice();

        const winner = calculateWinner(currentHistory.squares);

        if (winner || squaresCopy[squarePosition]) {
            return;
        }

        squaresCopy[squarePosition] = currentPlayer;

        const newPlayer = currentPlayer === 'X' ? 'O' : 'X';

        setCurrentPlayer(newPlayer);
        setCurrentStep(rewroteHistory.length);
        updateHistory([...rewroteHistory, { squares: squaresCopy }]);
    }

    function jumpTo(step) {
        setCurrentStep(step);
        setCurrentPlayer((step % 2) === 0 ? 'X' : 'O');
    }

    const currentHistory = history[currentStep];
    const winner = calculateWinner(currentHistory.squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${currentPlayer}`;

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={currentHistory.squares} onSquareClick={handleClick}/>
            </div>

            <div className="game-info">
                <div>{status}</div>
                <div>{renderHistory({ history, jumpTo })}</div>
            </div>
        </div>
    );
}
