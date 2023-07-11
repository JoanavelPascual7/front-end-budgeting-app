import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TransactionDetail.css";

function TransactionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/transactions/${id}`)
      .then((response) => setTransaction(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/transactions/${id}`)
      .then(() => {
        navigate("/transactions");
      })
      .catch((error) => console.error(error));
  };

  if (!transaction) {
    return <div>Loading...</div>;
  }

  return (
    <div className="transaction-detail">
      <h2>Transaction Detail</h2>
      <div className="transaction-field">
        <span className="transaction-label">ID:</span> {transaction.id}
      </div>
      <div className="transaction-field">
        <span className="transaction-label">Item Name:</span>{" "}
        {transaction.item_name}
      </div>
      <div className="transaction-field">
        <span className="transaction-label">Amount:</span> {transaction.amount}
      </div>
      <div className="transaction-field">
        <span className="transaction-label">Date:</span> {transaction.date}
      </div>
      <div className="transaction-field">
        <span className="transaction-label">From:</span> {transaction.from}
      </div>
      <div className="transaction-field">
        <span className="transaction-label">Category:</span>{" "}
        {transaction.category}
      </div>
      <div className="transaction-action">
        <Link to={`/transactions/${id}/edit`} className="edit-link">Edit</Link>
        <button onClick={handleDelete} className="delete-button">Delete</button>
      </div>
      <div className="transaction-action">
        <Link to="/transactions" className="back-link">Back to Index</Link>
      </div>
    </div>
  );
}

export default TransactionDetail;
