import React, { useState, useEffect } from 'react';

import {
  BreadcrumbItem, Button, Card, CardHeader, CardBody,
  CardTitle, DropdownToggle, DropdownMenu, DropdownItem,
  UncontrolledDropdown, Table, Row, Col, UncontrolledTooltip,
  CustomInput
} from "reactstrap";

const ConsultOK = () => {
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
                Início
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                {" "}
                Biblioteca
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem className="active">Dados</BreadcrumbItem>
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
                        EXCLUIR
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <CardTitle tag="h4">CONSULTADOS
                  <CustomInput
                    type="switch"
                    id="switch-1"
                    label="Consulta Responsiva"
                    value={consResp}
                    onChange={e => onRespChange(e.target.checked) }
                  />
                </CardTitle>
              </CardHeader>
              <CardBody>
                  <Table responsive={consResp} >
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center">#</th>
                        <th>NOME</th>
                        <th>OCUPAÇÃO</th>
                        <th className="text-center">INÍCIO</th>
                        <th className="text-right">SALÁRIO</th>
                        <th className="text-right">AÇÃO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <img
                              alt="..."
                              src={require("assets/img/tania.jpg").default}
                            />
                          </div>
                        </td>
                        <td>Andrew Mike</td>
                        <td>Programador</td>
                        <td className="text-center">2013</td>
                        <td className="text-right">R$ 99,225</td>
                        <td className="text-right">
                          <Button
                            className="btn-link btn-icon"
                            color="success"
                            id="tooltip324367706"
                            size="sm">
                            <i className="tim-icons icon-refresh-01" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip324367706">
                            Dica
                        </UncontrolledTooltip>
                          <Button
                            className="btn-link"
                            color="danger"
                            id="tooltip974171201"
                            size="sm">
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip974171201">
                            Dica
                        </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <img
                              alt="..."
                              src={require("assets/img/robi.jpg").default}
                            />
                          </div>
                        </td>
                        <td>John Doe</td>
                        <td>Design</td>
                        <td className="text-center">2012</td>
                        <td className="text-right">R$ 89,241</td>
                        <td className="text-right">
                          <Button
                            className="btn-link btn-icon"
                            color="success"
                            id="tooltip533157871"
                            size="sm">
                            <i className="tim-icons icon-refresh-01" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip533157871">
                            Dica
                        </UncontrolledTooltip>
                          <Button
                            className="btn-link"
                            color="danger"
                            id="tooltip423541936"
                            size="sm">
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip423541936">
                            Dica
                        </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <img
                              alt="..."
                              src={require("assets/img/lora.jpg").default}
                            />
                          </div>
                        </td>
                        <td>Alex Mike</td>
                        <td>Design</td>
                        <td className="text-center">2010</td>
                        <td className="text-right">R$ 92,144</td>
                        <td className="text-right">
                          <Button
                            className="btn-link btn-icon"
                            color="success"
                            id="tooltip101947879"
                            size="sm">
                            <i className="tim-icons icon-refresh-01" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip101947879">
                            Dica
                        </UncontrolledTooltip>
                          <Button
                            className="btn-link"
                            color="danger"
                            id="tooltip964133889"
                            size="sm">
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip964133889">
                            Dica
                        </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <img
                              alt="..."
                              src={require("assets/img/jana.jpg").default}
                            />
                          </div>
                        </td>
                        <td>Mike Monday</td>
                        <td>Marketing</td>
                        <td className="text-center">2013</td>
                        <td className="text-right">R$ 49,990</td>
                        <td className="text-right">
                          <Button
                            className="btn-link btn-icon btn-neutral"
                            color="success"
                            id="tooltip932549650"
                            size="sm">
                            <i className="tim-icons icon-refresh-01" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip932549650">
                            Dica
                        </UncontrolledTooltip>
                          <Button
                            className="btn-link btn-neutral"
                            color="danger"
                            id="tooltip696208424"
                            size="sm">
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip696208424">
                            Dica
                        </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <img
                              alt="..."
                              src={require("assets/img/robi.jpg").default}
                            />
                          </div>
                        </td>
                        <td>Paul Dickens</td>
                        <td>Comunicações</td>
                        <td className="text-center">2015</td>
                        <td className="text-right">R$ 69,201</td>
                        <td className="text-right">
                          <Button
                            className="btn-link btn-icon btn-neutral"
                            color="success"
                            id="tooltip188998609"
                            size="sm">
                            <i className="tim-icons icon-refresh-01" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip188998609">
                            Dica
                        </UncontrolledTooltip>
                          <Button
                            className="btn-link btn-neutral"
                            color="danger"
                            id="tooltip991400757"
                            size="sm">
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip991400757">
                            Dica
                        </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <img
                              alt="..."
                              src={require("assets/img/emilyz.jpg").default}
                            />
                          </div>
                        </td>
                        <td>Manuel Rico</td>
                        <td>Gerente</td>
                        <td className="text-center">2012</td>
                        <td className="text-right">R$ 99,201</td>
                        <td className="text-right">
                          <Button
                            className="btn-link btn-icon btn-neutral"
                            color="success"
                            id="tooltip967557276"
                            size="sm">
                            <i className="tim-icons icon-refresh-01" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip967557276">
                            Dica
                        </UncontrolledTooltip>
                          <Button
                            className="btn-link btn-neutral"
                            color="danger"
                            id="tooltip467555755"
                            size="sm">
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip467555755">
                            Dica
                        </UncontrolledTooltip>
                        </td>
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

export default ConsultOK;
