import React from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import { VectorMap } from "react-jvectormap";

import { Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter,
  CardTitle, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown,
  Label, FormGroup, Input, Progress, Table, Row, Col, UncontrolledTooltip,
} from "reactstrap";

import {
  chartExample1, chartExample2,
  chartExample3, chartExample4,
} from "./data/charts.js";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920,
};

const Dashboard = () => {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total</h5>
                    <CardTitle tag="h2">Desempenho Anual</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons">
                      <Button
                        color="sidebar"
                        id="0"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        onClick={() => setBgChartData("data1")}>
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Contas
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="sidebar"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}>
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Compras
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="sidebar"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}>
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Balanço
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-warning">
                      <i className="tim-icons icon-chat-33" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Número</p>
                      <CardTitle tag="h3">150GB</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="tim-icons icon-refresh-01" /> Refresh
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-primary">
                      <i className="tim-icons icon-shape-star" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Seguidores</p>
                      <CardTitle tag="h3">+45mil</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="tim-icons icon-sound-wave" /> Última Consulta
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-success">
                      <i className="tim-icons icon-single-02" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Usuários</p>
                      <CardTitle tag="h3">150.000</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="tim-icons icon-trophy" /> Feedback dos Clientes
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-danger">
                      <i className="tim-icons icon-molecule-40" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Erros</p>
                      <CardTitle tag="h3">12</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="tim-icons icon-watch-time" /> Na última hora
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total de Envios</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-primary" /> 763.215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Venda diária</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-info" />{" "}
                  R$ 3.500,00
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Tarefas concluídas</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 12.100mil
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="5">
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Tarefas(5)</h6>
                <p className="card-category d-inline">hoje</p>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    className="btn-icon"
                    color="link"
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
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                {/* <div className="table-full-width table-responsive"> */}
                <div className="table-full-width table">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Atuaslize a Documentação</p>
                          <p className="text-muted">
                            Centro, Porto Alegre, 8:47 
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip786630859"
                            title=""
                            type="button">
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip786630859">
                            Alterar
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Contrato com GDPR</p>
                          <p className="text-muted">                            
                            O GDPR é um regulamento que exige que as empresas
                            proteger os dados pessoais e a privacidade da Europa
                            cidadãos para transações que ocorrem dentro da UE
                            estados-membros.
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip155151810"
                            title=""
                            type="button">
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip155151810">
                            Alterar
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Resolver urgente</p>
                          <p className="text-muted">
                            Cinquenta por cento de todos os entrevistados disseram que seriam
                            mais probabilidade de comprar em uma empresa
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip199559448"
                            title=""
                            type="button">
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip199559448">
                            Alterar
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Atualização v2.0.0</p>
                          <p className="text-muted">
                            Centro, Porto Alegre, 8:47 
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip989676508"
                            title=""
                            type="button">
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip989676508">
                            Alterar
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Exportar os arquivos processados</p>
                          <p className="text-muted">
                            O relatório também mostra que os consumidores não irão facilmente
                            perdoar uma empresa, uma vez que uma violação expondo seu
                            ocorrerem dados pessoais.
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip557118868"
                            title=""
                            type="button">
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip557118868">
                            Alterar
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="7">
            <Card>
              <CardHeader>
                <div className="tools float-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      className="btn-icon"
                      color="link"
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
                <CardTitle tag="h5">Mesa de Gestão</CardTitle>
              </CardHeader>
              <CardBody>
                <Table /*responsive*/> 
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center">#</th>
                      <th>Nome</th>
                      <th>Ocupação</th>
                      <th>Meta</th>
                      <th className="text-right">Salário</th>
                      <th className="text-right">Ações</th>
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
                      <td>Tania Mike</td>
                      <td>Programador</td>
                      <td className="text-center">
                        <div className="progress-container progress-sm">
                          <Progress multi>
                            <span className="progress-value">25%</span>
                            <Progress bar max="100" value="25" />
                          </Progress>
                        </div>
                      </td>
                      <td className="text-right">R$ 99.225</td>
                      <td className="text-right">
                        <Button
                          className="btn-link btn-icon btn-neutral"
                          color="success"
                          id="tooltip618296632"
                          size="sm"
                          title="Refresh"
                          type="button">
                          <i className="tim-icons icon-refresh-01" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip618296632">
                          Dica
                        </UncontrolledTooltip>
                        <Button
                          className="btn-link btn-icon btn-neutral"
                          color="danger"
                          id="tooltip707467505"
                          size="sm"
                          title="Delete"
                          type="button">
                          <i className="tim-icons icon-simple-remove" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip707467505">
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
                      <td>João Ninguém</td>
                      <td>CEO</td>
                      <td className="text-center">
                        <div className="progress-container progress-sm">
                          <Progress multi>
                            <span className="progress-value">77%</span>
                            <Progress bar max="100" value="77" />
                          </Progress>
                        </div>
                      </td>
                      <td className="text-right">R$ 89.241</td>
                      <td className="text-right">
                        <Button
                          className="btn-link btn-icon btn-neutral"
                          color="success"
                          id="tooltip216846074"
                          size="sm"
                          title="Refresh"
                          type="button">
                          <i className="tim-icons icon-refresh-01" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip216846074">
                          Dica
                        </UncontrolledTooltip>
                        <Button
                          className="btn-link btn-icon btn-neutral"
                          color="danger"
                          id="tooltip391990405"
                          size="sm"
                          title="Delete"
                          type="button">
                          <i className="tim-icons icon-simple-remove" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip391990405">
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
                      <td>Adriana Mike</td>
                      <td>Design</td>
                      <td className="text-center">
                        <div className="progress-container progress-sm">
                          <Progress multi>
                            <span className="progress-value">41%</span>
                            <Progress bar max="100" value="41" />
                          </Progress>
                        </div>
                      </td>
                      <td className="text-right">R$ 92.144</td>
                      <td className="text-right">
                        <Button
                          className="btn-link btn-icon btn-neutral"
                          color="success"
                          id="tooltip191500186"
                          size="sm"
                          title="Refresh"
                          type="button">
                          <i className="tim-icons icon-refresh-01" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip191500186">
                          Dica
                        </UncontrolledTooltip>
                        <Button
                          className="btn-link btn-icon btn-neutral"
                          color="danger"
                          id="tooltip320351170"
                          size="sm"
                          title="Delete"
                          type="button">
                          <i className="tim-icons icon-simple-remove" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip320351170">
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
                      <td>Joana Monday</td>
                      <td>Marketing</td>
                      <td className="text-center">
                        <div className="progress-container progress-sm">
                          <Progress multi>
                            <span className="progress-value">50%</span>
                            <Progress bar max="100" value="50" />
                          </Progress>
                        </div>
                      </td>
                      <td className="text-right">R$ 49.990</td>
                      <td className="text-right">
                        <Button
                          className="btn-link btn-icon"
                          color="success"
                          id="tooltip345411997"
                          size="sm"
                          title="Refresh"
                          type="button">
                          <i className="tim-icons icon-refresh-01" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip345411997">
                          Dica
                        </UncontrolledTooltip>
                        <Button
                          className="btn-link btn-icon"
                          color="danger"
                          id="tooltip601343171"
                          size="sm"
                          title="Delete"
                          type="button">
                          <i className="tim-icons icon-simple-remove" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip601343171">
                          Dioca
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="photo">
                          <img
                            alt="..."
                            src={require("assets/img/mike.jpg").default}
                          />
                        </div>
                      </td>
                      <td>Paulo Dickens</td>
                      <td>Programador</td>
                      <td className="text-center">
                        <div className="progress-container progress-sm">
                          <Progress multi>
                            <span className="progress-value">100%</span>
                            <Progress bar max="100" value="100" />
                          </Progress>
                        </div>
                      </td>
                      <td className="text-right">R$ 69.201</td>
                      <td className="text-right">
                        <Button
                          className="btn-link btn-icon"
                          color="success"
                          id="tooltip774891382"
                          size="sm"
                          title="Refresh"
                          type="button">
                          <i className="tim-icons icon-refresh-01" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip774891382">
                          Dica
                        </UncontrolledTooltip>
                        <Button
                          className="btn-link btn-icon"
                          color="danger"
                          id="tooltip949929353"
                          size="sm"
                          title="Delete"
                          type="button">
                          <i className="tim-icons icon-simple-remove" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip949929353">
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
                      <td>Manuela Rico</td>
                      <td>Gerente</td>
                      <td className="text-center">
                        <div className="progress-container progress-sm">
                          <Progress multi>
                            <span className="progress-value">15%</span>
                            <Progress bar max="100" value="15" />
                          </Progress>
                        </div>
                      </td>
                      <td className="text-right">R$ 99.201</td>
                      <td className="text-right">
                        <Button
                          className="btn-link btn-icon"
                          color="success"
                          id="tooltip30547133"
                          size="sm"
                          title="Refresh"
                          type="button">
                          <i className="tim-icons icon-refresh-01" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltip30547133">
                          Dica
                        </UncontrolledTooltip>
                        <Button
                          className="btn-link btn-icon"
                          color="danger"
                          id="tooltip156899243"
                          size="sm"
                          title="Delete"
                          type="button">
                          <i className="tim-icons icon-simple-remove" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip156899243">
                          Dica
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col lg="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Vendas Globais por Localização</CardTitle>
                <p className="card-category">Apenas produtos enviados</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <Table /*responsive*/> 
                      <tbody>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/US.png").default}
                              />
                            </div>
                          </td>
                          <td>Estados Unidos</td>
                          <td className="text-right">2.920</td>
                          <td className="text-right">53.23%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/DE.png").default}
                              />
                            </div>
                          </td>
                          <td>Alemanha</td>
                          <td className="text-right">1.300</td>
                          <td className="text-right">20.43%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/AU.png").default}
                              />
                            </div>
                          </td>
                          <td>Austrália</td>
                          <td className="text-right">760</td>
                          <td className="text-right">10.35%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/GB.png").default}
                              />
                            </div>
                          </td>
                          <td>Reino Unido</td>
                          <td className="text-right">690</td>
                          <td className="text-right">7.87%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/RO.png").default}
                              />
                            </div>
                          </td>
                          <td>Romenia</td>
                          <td className="text-right">600</td>
                          <td className="text-right">5.94%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/BR.png").default}
                              />
                            </div>
                          </td>
                          <td>Brasil</td>
                          <td className="text-right">550</td>
                          <td className="text-right">4.34%</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col className="ml-auto mr-auto" md="6">
                    <VectorMap
                      map={"world_mill"}
                      backgroundColor="transparent"
                      zoomOnScroll={false}
                      containerStyle={{
                        width: "100%",
                        height: "300px",
                      }}
                      regionStyle={{
                        initial: {
                          fill: "#e4e4e4",
                          "fill-opacity": 0.9,
                          stroke: "none",
                          "stroke-width": 0,
                          "stroke-opacity": 0,
                        },
                      }}
                      series={{
                        regions: [
                          {
                            values: mapData,
                            scale: ["#AAAAAA", "#444444"],
                            normalizeFunction: "polynomial",
                          },
                        ],
                      }}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
