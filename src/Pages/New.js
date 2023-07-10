import TransactionNewForm from "../Components/TransactionNewForm";
// import "../Components/TransactionNewForm.css"; 

function New() {
  return (
    <div className="New">
      <h2>New</h2>
      <div className="form-container"> {/* Apply the form-container class */}
        <TransactionNewForm />
      </div>
    </div>
  );
}

export default New;
