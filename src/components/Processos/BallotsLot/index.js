import React, { Component } from 'react';
import {
  Alert, Row, Col, Card,
  CardHeader, CardBody
} from 'reactstrap';

class BallotsLot extends Component {
  render() {
    return (
      <div className="content flex-wrap bt-35">
        <Row>
          <Col className="ml-auto mr-auto" md="6">
            <Card>
              <CardHeader >
                <div className="text-center pt=3">
                  <h1>CÉDULAS POR LOTE</h1>
                </div>
              </CardHeader>
              <CardBody>
                <Alert color='delete'>
                  <p className="category text-center">
                    EM CONTRUÇÃO
                  </p>
                </Alert>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BallotsLot;
