import React, { Component } from 'react';
import {
  Alert, Row, Col, Card,
  CardHeader, CardBody
} from 'reactstrap';

class Registrys extends Component {
  render() {
    return (
      <div className="content flex-wrap bt-35">
        <Row>
          <Col className="ml-auto mr-auto" md="6">
            <Card>
              <CardHeader >
                <div className="text-center pt=3">
                  <h1>CADASTRO DE CARTÓRIOS</h1>
                </div>
              </CardHeader>
              <CardBody>
                <Alert color="info">
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

export default Registrys;
