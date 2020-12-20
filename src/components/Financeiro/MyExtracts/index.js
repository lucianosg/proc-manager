import React from "react";
import { Alert } from 'reactstrap';

const MyExtracts = () => {
  return (
    <>
      <div className="content pt-50">
        <div className="places-sweet-alerts">
          <h2 className="text-center">EXTRATOS PRÓPRIOS</h2>
        </div>
        <Alert color="warning">
          <h4 className="category text-center">
            <h4>EM CONTRUÇÃO</h4>
          </h4>
        </Alert>
      </div>
    </>
  );
}

export default MyExtracts;
