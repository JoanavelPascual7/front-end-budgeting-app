import React, { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "../Components/Transaction";
import "./Index.css";

function Index() {
  const [transactions, setTransactions] = useState([]);
  const [bankAccountTotal, setBankAccountTotal] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:4000/transactions")
      .then((response) => {
        setTransactions(response.data);
        calculateBankAccountTotal(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const calculateBankAccountTotal = (transactions) => {
    let total = 0;

    transactions.forEach((transaction) => {
      if (transaction.category === "Deposit") {
        total += parseFloat(transaction.amount);
      } else {
        total -= parseFloat(transaction.amount);
      }
    });

    setBankAccountTotal(total);
  };

  const getBankAccountTotalColor = () => {
    if (bankAccountTotal > 100) {
      return "greenish";
    } else if (bankAccountTotal >= 0 && bankAccountTotal <= 100) {
      return "yellowish";
    } else {
      return "reddish";
    }
  };

  return (
    <div className="TransactionIndex">
      <h2 className="transaction-heading">Transactions</h2>
      <div className={`bank-account-total ${getBankAccountTotalColor()}`}>
        Bank Account Total: ${bankAccountTotal.toFixed(2)}
      </div>
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

