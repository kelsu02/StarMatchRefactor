import React from 'react';
import colors from './colors';

export default function PlayAgain(props) {
    return (
        <div className="game-done">
            <div 
                className="message"
                style={{ color: props.gameStatus === "lost" ? colors.wrong : colors.used }}
            >
                {props.gameStatus === "lost" ? "Game Over" : "Great Job!\nYou Won!"}
            </div>
            <button onClick = {props.onClick} className="play-button">Play Again</button>
        </div>
    )
}
