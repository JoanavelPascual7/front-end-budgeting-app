import React, { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "../Components/Transaction";
import "./Index.css";

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
      <h2 className="transaction-heading">Transactions</h2>
      <table className="transaction-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>From</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <Transaction key={transaction.id} transaction={transaction} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
