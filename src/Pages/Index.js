import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/transactions")
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="Index">
      <h2>Index</h2>
      <table>
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
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.item_name}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>{transaction.from}</td>
              <td>{transaction.category}</td>
              <td>
                <Link to={`/transactions/${transaction.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
