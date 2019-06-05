import React from 'react';
import AvalonHeader from './UI/AvalonHeader';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CreateRoom = () => (
  <div>
    <AvalonHeader />
    <Row className="pt-md-2">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <div>
          <Form>
            <FormGroup>
              <div>
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

export default CreateRoom;
