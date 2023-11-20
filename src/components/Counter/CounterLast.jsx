import { useState } from "react";
// import "./Counter.css";
const CounterLast = () => {
  const [sub_count, set_subCount] = useState(0);
  const [alh_count, set_alhCount] = useState(0);
  const [allahuAkbar, setAllahuAkbar] = useState(0);
  const handleIncrementSub = () => {
    // setCount(coutn + 1);
    sub_count < 33 && set_subCount((preValue) => preValue + 1);
  };

  const handleIncrementAlh = () => {
    // setCount(coutn + 1);
    alh_count < 33 && set_alhCount((preValue) => preValue + 1);
  };

  const handleIncrementAllahu = () => {
    // setCount(coutn - 1);
    // setCount((preValue) => preValue > 0 ? preValue -1 : 0)
    allahuAkbar < 34 && setAllahuAkbar((preValue) => preValue + 1);
  };
  const handleReset = () => {
    set_subCount(0);
    set_alhCount(0);
    setAllahuAkbar(0);
  };
  return (
    <div className="counter-section">
      <h1>{sub_count}</h1>
      <h1>{alh_count}</h1>
      <h1>{allahuAkbar}</h1>
      <div className="btn">
        <button className="btn__button" onClick={handleIncrementSub}>
          subhanallah
        </button>
        <button className="btn__button" onClick={handleIncrementAlh}>
          alhamdulillah
        </button>
        <button className="btn__button" onClick={handleIncrementAllahu}>
          Allahu Akbar
        </button>

        <button className="btn__button" onClick={handleReset}>
          Rest
        </button>
      </div>
    </div>
  );
};
export default CounterLast;
