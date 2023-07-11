import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function TransactionNewForm() {
    const navigate = useNavigate(); 
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: ""
  });

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
      .post("http://localhost:4000/transactions", transaction)
      .then((response) => {
        const newTransactionId = response.data.id;
        navigate(`/transactions/${newTransactionId}`);
      })
      .catch((error) => console.error(error));
  };
  
  
  

  return (
    <div className="transaction-new-form">
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
        <button type="submit">Create Transaction</button>
      </form>
    </div>
  );
}

export default TransactionNewForm;