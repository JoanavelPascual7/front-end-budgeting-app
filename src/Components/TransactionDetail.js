import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function TransactionDetail() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [Transaction, setTransaction] = useState(null);

  useEffect(() => {
    axios
      .get(`/transactions/${index}`)
      .then((response) => setTransaction(response.data))
      .catch((error) => console.error(error));
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(`/transactions/${index}`)
      .then(() => {
        navigate("/transactions");
      })
      .catch((error) => console.error(error));
  };

  if (!Transaction) {
    return <div>Loading...</div>;
  }

  return (
    {/* Your JSX code goes here */}
  );
}

export default TransactionDetail;
