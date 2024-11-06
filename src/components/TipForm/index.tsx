const TipForm = () => {
  interface PercentagePreset {
    id: number;
    value: number | string;
  }

  const percentagePresets: PercentagePreset[] = [
    { id: 1, value: 5 },
    { id: 2, value: 10 },
    { id: 3, value: 15 },
    { id: 4, value: 25 },
    { id: 5, value: 50 },
    { id: 5, value: 'custom' },
  ];

  return (
    <div>
      <div className="bill-field">
        <label htmlFor="bill">Bill</label>
        <input type="number" id="bill" />
      </div>

      <div className="select-tip-field">
        <label htmlFor="tip">Select Tip %</label>

        {percentagePresets.map(({ id, value }) => (
          <label key={id} className="square-checkbox">
            <input type="radio" name={`${value}-tip`} />
          </label>
        ))}
      </div>

      <div className="num-people-field">
        <label htmlFor="num-people">Number of People</label>
        <input type="number" id="num-people" />
      </div>
    </div>
  );
};

export default TipForm;
