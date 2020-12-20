import React from "react";
import Select from "react-select";
import ReactDatetime from "react-datetime";

import {
  Button, Card, CardHeader, CardBody, CardFooter,
  FormGroup, Form, Input, Row, Col, UncontrolledTooltip
} from "reactstrap";

const lsPessoa = [
  { value: 'CPF', label: 'CPF' },
  { value: 'CNPJ', label: 'CNPJ' }
];

const UF = [
  { value: 'RS', label: 'RS' },
  { value: 'SC', label: 'SC' }
];

const lsSexo = [
  { value: 'M', label: 'MASCULINO' },
  { value: 'F', label: 'FEMININO' }
];

const lsEsCivil = [
  { value: '1', label: 'SOLTEIRO(A)' },
  { value: '2', label: 'CASADO(A)' },
  { value: '3', label: 'DIVORCIADO(A)' },
  { value: '4', label: 'VIÚVO(A)' },
  { value: '5', label: 'SEPARADO(A)' },
];

const Company = () => {
  const [tipoPessoa, setTipoPessoa] = React.useState('CPF');
  const [estado, setEstado] = React.useState('RS');
  const [sexo, setSexo] = React.useState('M');
  const [esCivil, setEsCivil] = React.useState('1');

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="ml-2">
                <h5 className="title">CADASTRO DE EMPRESAS</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="1">
                      <FormGroup>
                        <label>PESSOA</label>
                        <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          defaultValue={tipoPessoa}
                          onChange={setTipoPessoa}
                          options={lsPessoa}
                          placeholder="CPF"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="2">
                      <FormGroup>
                        <label>DOCUMENTO</label>
                        <Input
                          defaultValue=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>NOME - RAZÃO SOCIAL</label>
                        <Input defaultValue="" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="5">
                      <FormGroup>
                        <label>NOME FANTASIA</label>
                        <Input placeholder="" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="2">
                      <FormGroup>
                        <label>RG - INCRIÇÃO ESTADUAL</label>
                        <Input defaultValue="" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="2">
                      <FormGroup>
                        <label>INCRIÇÃO MUNICIPAL</label>
                        <Input defaultValue="" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>SITE</label>
                        <Input defaultValue="" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="2">
                      <FormGroup>
                        <label>DATA NASCIMENTO</label>
                        <ReactDatetime
                          inputProps={{
                            className: "form-control",
                            placeholder: "",
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="2">
                      <FormGroup>
                        <label>DATA CADASTRO</label>
                        <ReactDatetime
                          inputProps={{
                            className: "form-control",
                            placeholder: "",
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="5">
                      <FormGroup>
                        <label>ENDEREÇO</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="1">
                      <FormGroup>
                        <label>NÚMERO</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="2">
                      <FormGroup>
                        <label>COMPL</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>BAIRRO</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="5">
                      <FormGroup>
                        <label>CIDADE</label>
                        <Input defaultValue="" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="1">
                      <FormGroup>
                        <label>ESTADO</label>
                        <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          defaultValue={estado}
                          onChange={setEstado}
                          options={UF}
                          placeholder=""
                        />
                      </FormGroup>
                    </Col>
                    <Col md="5">
                      <FormGroup>
                        <label>PAÍS</label>
                        <Input defaultValue="" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="1">
                      <FormGroup>
                        <label>CEP</label>
                        <Input placeholder="" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="2">
                      <FormGroup>
                        <label>SEXO</label>
                        <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          defaultValue={sexo}
                          onChange={setSexo}
                          options={lsSexo}
                          placeholder=""
                        />
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <FormGroup>
                        <label>TELEFONE RESIDENCIAL</label>
                        <Input defaultValue="" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <FormGroup>
                        <label>TELEFONE COMERCIAL</label>
                        <Input defaultValue="" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>E-MAIL</label>
                        <Input placeholder="" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="2">
                      <FormGroup>
                        <label>ESTADO CIVIL</label>
                        <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          defaultValue={esCivil}
                          onChange={setEsCivil}
                          options={lsEsCivil}
                          placeholder=""
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>PROFISSÃO</label>
                        <Input defaultValue="" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <FormGroup>
                        <label>SEDNHA</label>
                        <Input defaultValue="" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <FormGroup>
                        <label>SENHA (CONFIRMAÇÃO)</label>
                        <Input placeholder="" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>OBSERVAÇÕES</label>
                        <Input
                          cols="80"
                          defaultValue=""
                          placeholder="Inclua uma descrição"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Row className="justify-content-space-between">
                  <Col md="6">
                    <UncontrolledTooltip delay={0} target="tooltip30547133">
                      Vincula Twitter ao cadastro
                    </UncontrolledTooltip>
                    <Button
                      id="tooltip30547133"
                      color="twitter"
                      className="btn-icon btn-round ml-2">
                      <i className="fab fa-twitter" />
                    </Button>

                    <UncontrolledTooltip delay={0} target="tooltip305471431">
                      Vincula Facebbok ao cadastro
                    </UncontrolledTooltip>
                    <Button
                      id="tooltip305471431"
                      color="facebook"
                      className="btn-icon btn-round ml-2">
                      <i className="fab fa-facebook-f" />
                    </Button>
                  </Col>

                  <Col md="6">
                    <Button
                      className="btn-simple fa-pull-right mr-2"
                      color="sidebar"
                      type="submit">
                      GRAVA
                    </Button>
                    <Button
                      className="btn-simple fa-pull-right mr-2"
                      color="danger">
                      CANCELA
                    </Button>
                    <Button
                      className="btn-simple fa-pull-right mr-2"
                      color="info">
                      ARQUIVOS
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Company;
