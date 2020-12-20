import React from "react";
import { Alert } from 'reactstrap';

const Balances = () => {
  return (
    <>
      <div className="content pt-50">
        <div className="places-sweet-alerts">
          <h2 className="text-center">SALDOS</h2>
        </div>
        <Alert color="success">
          <h4 className="category text-center">
            <h4>EM CONTRUÇÃO</h4>
          </h4>
        </Alert>
      </div>
    </>
  );
}

export default Balances;
