import React from "react";
import classnames from "classnames";
import {
  Button, Card, CardHeader, CardBody, CardFooter,
  CardImg, CardTitle, Label, FormGroup, Form, Input,
  InputGroupAddon, InputGroupText, InputGroup,
  Container, Row, Col
} from "reactstrap";

const Register = () => {
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    return function cleanup() {
      document.body.classList.toggle("register-page");
    };
  });
  
  return (
    <>
      <div className="content">
        <Container>
          <Row>
            <Col className="ml-auto" md="5">
              <div className="info-area info-horizontal mt-5">
                <div className="icon icon-warning">
                  <i className="tim-icons icon-wifi" />
                </div>
                <div className="description">
                  <h3 className="info-title">Marketing</h3>
                  <p className="description">
                    Criamos a campanha de marketing do site. isso foi
                    uma colaboração muito interessante.
                  </p>
                </div>
              </div>
              <div className="info-area info-horizontal">
                <div className="icon icon-primary">
                  <i className="tim-icons icon-triangle-right-17" />
                </div>
                <div className="description">
                  <h3 className="info-title">Consultoria digital</h3>
                  <p className="description">
                    bla bla bla bla
                  </p>
                </div>
              </div>
              <div className="info-area info-horizontal">
                <div className="icon icon-info">
                  <i className="tim-icons icon-trophy" />
                </div>
                <div className="description">
                  <h3 className="info-title">Entre em contato</h3>
                  <p className="description">
                    bla bla bla bla
                  </p>
                </div>
              </div>
            </Col>
            <Col className="mr-auto" md="7">
              <Card className="card-register card-white">
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("assets/img/card-primary.png").default}
                  />
                  <CardTitle tag="h4">Registrar</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form">
                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.nameFocus,
                      })}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Nome Completo"
                        type="text"
                        onFocus={(e) => setState({ ...state, nameFocus: true })}
                        onBlur={(e) => setState({ ...state, nameFocus: false })}
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.emailFocus,
                      })}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="text"
                        onFocus={(e) =>
                          setState({ ...state, emailFocus: true })
                        }
                        onBlur={(e) =>
                          setState({ ...state, emailFocus: false })
                        }
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.passFocus,
                      })}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="sENHA"
                        type="text"
                        onFocus={(e) => setState({ ...state, passFocus: true })}
                        onBlur={(e) => setState({ ...state, passFocus: false })}
                      />
                    </InputGroup>
                    <FormGroup check className="text-left">
                      <Label check>
                        <Input type="checkbox" />
                        <span className="form-check-sign" />Concordo com os {" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          termos e condições
                        </a>
                        .
                      </Label>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    className="btn-round"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg">
                    VAMOS LÁ
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
