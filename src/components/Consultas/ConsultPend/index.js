import React, { useState, useEffect } from 'react';

import {
  BreadcrumbItem, Card, CardHeader, CardBody, UncontrolledDropdown,
  CardTitle, DropdownToggle, DropdownMenu, DropdownItem, Row,
  Label, FormGroup, Input, Progress, Table, CustomInput, Col,
} from "reactstrap";

const ConsultPend = () => {
  const [consResp, setConsResp] = useState(false);

  useEffect(() => {
    setConsResp(consResp);
  }, [consResp]);

  const onRespChange = (e) => {
    setConsResp(e);
  }

  return (
    <>
      <div className="content">
        <Row>
          <ol className="breadcrumb bg-transparent ml-3">
            <BreadcrumbItem>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Home
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                {" "}
                Biblioteca
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem className="active">Datos</BreadcrumbItem>
          </ol>
          <Col md="12">
            <Card>
              <CardHeader>
                <div className="tools float-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      className="btn-link btn-icon"
                      color="default"
                      data-toggle="dropdown"
                      type="button">
                      <i className="tim-icons icon-settings-gear-63" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}>
                        Ação 1
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}>
                        Ação 2
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}>
                        Ação 3
                      </DropdownItem>
                      <DropdownItem
                        className="text-danger"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}>
                        Excluir
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <CardTitle tag="h4">PENDENTES
                  <CustomInput
                    type="switch"
                    id="switch-1"
                    label="Consulta Responsiva"
                    value={consResp}
                    onChange={e => onRespChange(e.target.checked)}
                  />
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive={consResp} striped>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center">#</th>
                      <th>OPERAÇÃO</th>
                      <th>TIPO</th>
                      <th>STATUS</th>
                      <th className="text-center">QTDE</th>
                      <th className="text-right">VALOR</th>
                      <th className="text-right">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <FormGroup check>
                          <Label check>
                            <Input defaultChecked type="checkbox" />
                            <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                      </td>
                      <td>Moleskine Agenda</td>
                      <td>Office</td>
                      <td>
                        <div className="progress-container">
                          <span className="progress-badge">v1.2.0</span>
                          <Progress max="100" value="25">
                            <span className="progress-value">25%</span>
                          </Progress>
                        </div>
                      </td>
                      <td className="text-center">25</td>
                      <td className="text-right">R$ 49</td>
                      <td className="text-right">R$ 1,225</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                      </td>
                      <td>Stabilo Pen</td>
                      <td>Office</td>
                      <td>
                        <div className="progress-container">
                          <span className="progress-badge">v1.4.0</span>
                          <Progress max="100" value="45">
                            <span className="progress-value">45%</span>
                          </Progress>
                        </div>
                      </td>
                      <td className="text-center">30</td>
                      <td className="text-right">R$ 10</td>
                      <td className="text-right">R$ 300</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <FormGroup check>
                          <Label check>
                            <Input defaultChecked type="checkbox" />
                            <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                      </td>
                      <td>A4 Paper Pack</td>
                      <td>Office</td>
                      <td>
                        <div className="progress-container">
                          <span className="progress-badge">v2.0.0</span>
                          <Progress max="100" value="10">
                            <span className="progress-value">10%</span>
                          </Progress>
                        </div>
                      </td>
                      <td className="text-center">50</td>
                      <td className="text-right">R$ 10.99</td>
                      <td className="text-right">R$ 109</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                      </td>
                      <td>Apple iPad</td>
                      <td>Meeting</td>
                      <td>
                        <div className="progress-container">
                          <span className="progress-badge">v1.5.0</span>
                          <Progress max="100" value="80">
                            <span className="progress-value">80%</span>
                          </Progress>
                        </div>
                      </td>
                      <td className="text-center">10</td>
                      <td className="text-right">R$ 499.00</td>
                      <td className="text-right">R$ 4,990</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <FormGroup check>
                          <Label check>
                            <Input defaultChecked type="checkbox" />
                            <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                      </td>
                      <td>Apple iPhone</td>
                      <td>Communication</td>
                      <td>
                        <div className="progress-container">
                          <span className="progress-badge">v1.2.0</span>
                          <Progress max="100" value="30">
                            <span className="progress-value">30%</span>
                          </Progress>
                        </div>
                      </td>
                      <td className="text-center">10</td>
                      <td className="text-right">R$ 599.00</td>
                      <td className="text-right">R$ 5,999</td>
                    </tr>
                    <tr>
                      <td colSpan="5" />
                      <td className="td-total">TOTAL</td>
                      <td className="td-price">R$ 35,999</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ConsultPend;

