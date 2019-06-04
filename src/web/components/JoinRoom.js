import React from 'react';
import {
  Row,
  Col,
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const JoinRoom = () => (
  <div>
    <Row>
      <Jumbotron className="bg-primary text-white">
        <h1>Avalonie Pepperoni</h1>
        <sub>Who ruined the pizza?!</sub>
      </Jumbotron>
    </Row>
    <Row className="pt-md-2">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <div>
          <Form>
            <FormGroup>
              <div>
                <div>
                  <Label for="room-code">Room Code</Label>
                  <Input
                    name="room-code"
                    id="room-code"
                    value="Room Code Here!"
                  />
                </div>
                <div>
                  <Label for="name">Name</Label>
                  <Input name="name" id="name" value="Your Name Here!" />
                </div>
              </div>
              <Button color="primary">Submit</Button>
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
  </div>
);

export default JoinRoom;
