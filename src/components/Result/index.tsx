import './style.css';

const Result = () => {
  return (
    <div className="result-container">
      <div className="amount">
        <div className="amount-label">
          <h2 className="result-title">Tip Amount</h2>
          <p className="result-subtitle">/ person</p>
          <div>$4.27</div>
        </div>
      </div>

      <div className="total">
        <div>
          <h2 className="result-title">Total</h2>
          <p className="result-subtitle">/ person</p>
          <div>$4.27</div>
        </div>
      </div>

      <button className="result-reset-btn">RESET</button>
    </div>
  );
};

export default Result;
