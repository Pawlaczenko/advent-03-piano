import React, { useState } from 'react'

const PianoKey = ({ path, id }) => {
    const pianoSound = `./audio/${id}.mp3`;

    const playSound = () => {
        let s = new Audio(pianoSound);
        s.play();
    }

    return (
        <a href='#' onClick={playSound}>
            {path}
        </a>
    )
}

export default PianoKey
