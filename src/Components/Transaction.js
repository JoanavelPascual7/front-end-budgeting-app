import React from "react";
import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <tr className="transaction">
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
  );
}

export default Transaction;
