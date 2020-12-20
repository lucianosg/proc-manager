import React from "react";
import classNames from "classnames";

import {
  Card, CardBody, CardHeader, CardTitle,
  Row, Col, Button
} from "reactstrap";

import ReactTable from "../../ReactTable/ReactTable";

const dataTable = [
  ["Airi Satou", "Contador", "Tokyo", "33"],
  ["Angelica Ramos", "(CEO)", "London", "47"],
  ["Ashton Cox", "Tec Junior", "San Francisco", "66"],
  ["Bradley Greer", "Eng de Sistemas", "London", "41"],
  ["Brenden Wagner", "Eng de Sistemas", "San Francisco", "28"],
  ["Brielle Williamson", "Specialista Integrador", "New York", "61"],
  ["Caesar Vance", "Support", "New York", "21"],
  ["Cedric Kelly", "Prog Javascript", "Edimburgo", "22"],
  ["Charde Marshall", "Diretor", "San Francisco", "36"],
  ["Colleen Hurst", "Prog Javascript", "San Francisco", "39"],
  ["Dai Rios", "Dep Pessal", "Edimburgo", "35"],
  ["Doris Wilder", "Vendedor", "Sidney", "23"],
  ["Fiona Green", "(COO)", "San Francisco", "48"],
  ["Garrett Winters", "Contador", "Tokyo", "63"],
  ["Gavin Cortez", "Supervisor", "San Francisco", "22"],
  ["Gavin Joyce", "Programador", "Edimburgo", "42"],
  ["Gloria Little", "Administrator", "New York", "59"],
  ["Haley Kennedy", "Marketing Designer", "London", "43"],
  ["Herrod Chandler", "VEndedor", "San Francisco", "59"],
  ["Hope Fuentes", "Secretária", "San Francisco", "41"],
  ["Howard Hatfield", "Ger Escritório", "San Francisco", "51"],
  ["Jackson Bradshaw", "Diretor", "New York", "65"],
  ["Jena Gaines", "Ger Escritório", "London", "30"],
  ["Jenette Caldwell", "Gerente Prod", "New York", "30"],
  ["Jennifer Chang", "Director Reg", "Singapore", "28"],
  ["Martena Mccray", "Suporte", "Edimburgo", "46"],
  ["Michael Silva", "Designer de Marketing", "Londres", "66"],
  ["Michelle House", "Specialista Integrador", "Sidney", "37"],
  ["Olivia Liang", "Engenheira de Suporte", "Singapura", "64"],
  ["Paul Byrd", "(CFO)", "New York", "64"],
  ["Prescott Bartlett", "Autor Técnico", "Londres", "27"],
  ["Quinn Flynn", "Líder de Suporte", "Edimburgo", "22"],
  ["Rhona Davidson", "Specialista Integrador", "Tokyo", "55"],
  ["Shou Itou", "Marketing Regional", "Tóquio", "20"],
  ["Sonya Frost", "Eng de Sistemas", "Edinburgh", "23"],
  ["Suki Burks", "Programador", "London", "53"],
  ["Tatyana Fitzpatrick", "Director Reg", "London", "19"],
  ["Timothy Mooney", "Ger Escritório", "London", "37"],
  ["Unity Butler", "Marketing Designer", "San Francisco", "47"],
  ["Vivian Harrell", "Financial Controller", "San Francisco", "62"],
  ["Yuri Berry", "(CMO)", "New York", "40"],
  ["Tiger Nixon", "System Architect", "Edinburgh", "61"],
];

const Contracts = () => {
  const [data, setData] = React.useState(
    dataTable.map((prop, key) => {
      return {
        id: key,
        name: prop[0],
        position: prop[1],
        office: prop[2],
        age: prop[3],
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <Button
              onClick={() => {
                let obj = data.find((o) => o.id === key);
                alert(
                  "You've clicked LIKE button on \n{ \nName: " +
                  obj.name +
                  ", \nposition: " +
                  obj.position +
                  ", \noffice: " +
                  obj.office +
                  ", \nage: " +
                  obj.age +
                  "\n}."
                );
              }}
              color="info"
              size="sm"
              className={classNames("btn-icon btn-link like", {
                "btn-neutral": key < 5,
              })}>
              <i className="tim-icons icon-heart-2" />
            </Button>{" "}
            {/* use this button to add a edit kind of action */}
            <Button
              onClick={() => {
                let obj = data.find((o) => o.id === key);
                alert(
                  "You've clicked EDIT button on \n{ \nName: " +
                  obj.name +
                  ", \nposition: " +
                  obj.position +
                  ", \noffice: " +
                  obj.office +
                  ", \nage: " +
                  obj.age +
                  "\n}."
                );
              }}
              color="warning"
              size="sm"
              className={classNames("btn-icon btn-link like", {
                "btn-neutral": key < 5,
              })}>
              <i className="tim-icons icon-pencil" />
            </Button>{" "}
            {/* use this button to remove the data row */}
            <Button
              onClick={() => {
                var newdata = data;
                newdata.find((o, i) => {
                  if (o.id === key) {
                    // here you should add some custom code so you can delete the data
                    // from this component and from your server as well
                    data.splice(i, 1);
                    console.log(data);
                    return true;
                  }
                  return false;
                });
                setData(newdata);
              }}
              color="danger"
              size="sm"
              className={classNames("btn-icon btn-link like", {
                "btn-neutral": key < 5,
              })}>
              <i className="tim-icons icon-simple-remove" />
            </Button>{" "}
          </div>
        ),
      };
    })
  );

  return (
    <>
      <div className="content">
        <Row className="mt-5">
          <Col xs={12} md={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">CONSULTAS DE CONTRATOS
                </CardTitle>
              </CardHeader>
              <CardBody>
                <ReactTable
                  data={data}
                  filterable
                  resizable={false}
                  columns={[
                    {
                      Header: "Nome",
                      accessor: "name",
                    },
                    {
                      Header: "Posição",
                      accessor: "position",
                    },
                    {
                      Header: "Local",
                      accessor: "office",
                    },
                    {
                      Header: "Idade",
                      accessor: "age",
                    },
                    {
                      Header: "Ações",
                      accessor: "actions",
                      sortable: false,
                      filterable: false,
                    },
                  ]}
                  defaultPageSize={10}
                  showPaginationTop
                  showPaginationBottom={false}
                  className="-striped -highlight"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contracts;
