import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import "src/Components/TransactionEditForm.css"

function TransactionEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: ""
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/transactions/${id}`, transaction)
      .then((response) => {
        console.log(response.data);
        // Handle success (e.g., show success message, redirect, etc.)
        navigate(`/transactions/${id}`);
      })
      .catch((error) => console.error(error));
  };

  if (!transaction) {
    return <div>Loading...</div>;
  }

  return (
    <div className="transaction-edit-form">
      <h2>Edit Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            name="item_name"
            value={transaction.item_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={transaction.date}
            onChange={handleChange}
          />
        </label>
        <label>
          From:
          <input
            type="text"
            name="from"
            value={transaction.from}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={transaction.category}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Transaction</button>
      </form>
    </div>
  );
}

export default TransactionEditForm;
