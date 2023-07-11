import React, { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "../Components/Transaction";

function Index() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/transactions")
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="TransactionIndex">
      <h2>Transactions</h2>
      {transactions.map((transaction, index) => (
        <Transaction key={transaction.id} transaction={transaction} index={index} />
      ))}
    </div>
  );
}

export default Index;
