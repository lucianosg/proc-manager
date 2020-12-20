import React from "react";
import {
  Card, CardHeader, CardBody, 
  CardTitle, Row, Col
} from "reactstrap";

import SortingTable from "../../SortingTable/SortingTable";

const MyContracts = () => {
  return (
    <>
      <div className="content">
        <Row>
          <Col className="mb-5" md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">CONSULTA DE CONTRATOS</CardTitle>
                <p className="category">Legenda do Relatório</p>
              </CardHeader>
              <CardBody>
                <SortingTable
                  thead={[
                    { text: "NOME" },
                    { text: "PAÍS" },
                    { text: "CIDADE" },
                    { className: "text-center", text: "SALÁRIO" },
                  ]}
                  tbody={[
                    {
                      data: [
                        { text: "Dakota Rice" },
                        { text: "Niger" },
                        { text: "Oud-Turnhout" },
                        { className: "text-center", text: "R$ 36,738" },
                      ],
                    },
                    {
                      data: [
                        { text: "Minerva Hooper" },
                        { text: "Curaçao" },
                        { text: "Sinaai-Waas" },
                        { className: "text-center", text: "R$ 23,789" },
                      ],
                    },
                    {
                      data: [
                        { text: "Sage Rodriguez" },
                        { text: "Netherlands" },
                        { text: "Baileux" },
                        { className: "text-center", text: "R$ 56,142" },
                      ],
                    },
                    {
                      data: [
                        { text: "Philip Chaney" },
                        { text: "Korea, South" },
                        { text: "Overland Park" },
                        { className: "text-center", text: "R$ 38,735" },
                      ],
                    },
                    {
                      data: [
                        { text: "Doris Greene" },
                        { text: "Malawi" },
                        { text: "Feldkirchen in Kärnten" },
                        { className: "text-center", text: "R$ 63,542" },
                      ],
                    },
                    {
                      data: [
                        { text: "Mason Porter" },
                        { text: "Chile" },
                        { text: "Gloucester" },
                        { className: "text-center", text: "R$ 78,615" },
                      ],
                    },
                    {
                      data: [
                        { text: "Jon Porter" },
                        { text: "Portugal" },
                        { text: "Gloucester" },
                        { className: "text-center", text: "R$ 98,615" },
                      ],
                    },
                  ]}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MyContracts;
