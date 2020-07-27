import React from 'react';
import { Board } from './Board';


export function Game() {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>

            <div className="game-info">
                <div>{/* STATUS */}</div>
                <div>{/* TODO */}</div>
            </div>
        </div>
    );
}
