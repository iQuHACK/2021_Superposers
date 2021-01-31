import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Welcome({ location }) {
    const history = useHistory();
    const [level, setLevel] = useState(1);

    return (
        <div className={'mainPage'}>
            <h1>Welcome to Superposers!</h1>
            <br></br>
            <h3>Pick your level:</h3>
            <br></br>
            <ListGroup defaultActiveKey={setLevel}>
                <ListGroup.Item action onClick ={() => setLevel(1)}>Level 1</ListGroup.Item>
                <ListGroup.Item action onClick ={() => setLevel(2)}>Level 2</ListGroup.Item>
                <ListGroup.Item action onClick ={() => setLevel(3)}>Level 3</ListGroup.Item>
                <ListGroup.Item action onClick ={() => setLevel(4)}>Level 4</ListGroup.Item>
                <ListGroup.Item action onClick ={() => setLevel(5)}>Level 5</ListGroup.Item>
            </ListGroup>
            <br></br>
            <Button onClick={() => history.push("/play")}>Start game</Button>
        </div>
    )
}

export default Welcome;