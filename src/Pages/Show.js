import React from "react";
import TransactionDetail from "../Components/TransactionDetail";

import "./Show.css";

function Show() {
  return (
    <div className="show-container">
      <h2 className="show-heading">Show</h2>
      <TransactionDetail />
    </div>
  );
}

export default Show;
