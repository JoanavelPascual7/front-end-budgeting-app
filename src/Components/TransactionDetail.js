import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <div>
        <label>ID:</label> {transaction.id}
      </div>
      <div>
        <label>Item Name:</label> {transaction.item_name}
      </div>
      <div>
        <label>Amount:</label> {transaction.amount}
      </div>
      <div>
        <label>Date:</label> {transaction.date}
      </div>
      <div>
        <label>From:</label> {transaction.from}
      </div>
      <div>
        <label>Category:</label> {transaction.category}
      </div>
      <div>
        <Link to={`/transactions/${id}/edit`}>Edit</Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div>
        <Link to="/transactions">Back to Index</Link>
      </div>
    </div>
  );
}

export default TransactionDetail;
