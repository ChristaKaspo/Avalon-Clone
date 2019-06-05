import React from 'react';
import { Row, Col, Jumbotron, Button } from 'reactstrap';

const WaitingRoom = () => (
  <div>
    <Row>
      <Jumbotron className="bg-primary text-white">
        <h1>Avalonie Pepperoni</h1>
        <sub>Who ruined the pizza?!</sub>
      </Jumbotron>
    </Row>
    <Row className="pt-md-2">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h1>
          Room code: <span>1234</span>
        </h1>
        {/* player list rendered here.*/}
        <div className="player-wrapper">name of player</div>
        <Button color="primary">Start Game</Button>
      </Col>
    </Row>
  </div>
);

export default WaitingRoom;
