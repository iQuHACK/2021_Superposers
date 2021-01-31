import React from 'react';
import '../styles.css'
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Unity, { UnityContext } from 'react-unity-webgl';
import GameCanvas from './GameCanvas.component';

function GamePage({ location }) {
    const history = useHistory();

    return (
        <div className={'mainPage'}>
            <h1>Superposers</h1>
            <br></br>
            <Button onClick ={() => history.push("/")}> Back to home page</Button>
            <br></br>
            <br></br>
            <GameCanvas />
        </div>
    )
}

export default GamePage;