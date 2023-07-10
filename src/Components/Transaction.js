import { Link } from "react-router-dom";

function transaction({ transaction, index }) {
  console.log(transaction); // check console

  return (
    <tr className="transaction">
      <td>
        {transaction.mistakesWereMadeToday ? (
          <span>💥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>{transaction.captainName}</td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.title}</Link>
      </td>
    </tr>
  );
}

export default Log;
