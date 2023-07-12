import React from "react";
import TransactionNewForm from "../Components/TransactionNewForm";

import "./New.css"

function New() {
  return (
    <div className="New">
      <h2>Create New Transaction</h2>
      <TransactionNewForm />
    </div>
  );
}

export default New;
