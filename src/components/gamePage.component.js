import React from 'react';
import '../styles.css'
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Unity, { UnityContext } from 'react-unity-webgl';

function GamePage({ location }) {
    const history = useHistory();
    const unityContext = new UnityContext({
        loaderUrl: "../build/Build/build2.loader.js",
        dataUrl: "../build/Build/build2.data",
        frameworkUrl: "../build/Build/build2.framework.js",
        codeUrl: "../build/Build/build2.wasm",
    });

    return (
        <div className={'mainPage'}>
            <h1>Superposers</h1>
            <Button onClick ={() => history.push("/")}> Back to home page</Button>
            <Unity unityContext={unityContext} />

        </div>
    )
}

export default GamePage;