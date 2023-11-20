import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [sub_count, set_subCount] = useState(0);
  const [alh_count, set_alhCount] = useState(0);
  const [allahuAkbar, setAllahuAkbar] = useState(0);

  const handleIncrementSub = () => {
    sub_count < 33 && set_subCount((preValue) => preValue + 1);
  };

  const handleIncrementAlh = () => {
    alh_count < 33 && set_alhCount((preValue) => preValue + 1);
  };

  const handleIncrementAllahu = () => {
    allahuAkbar < 34 && setAllahuAkbar((preValue) => preValue + 1);
  };

  const handleResetSub = () => {
    set_subCount(0);
  };

  const handleResetAlh = () => {
    set_alhCount(0);
  };

  const handleResetAllahu = () => {
    setAllahuAkbar(0);
  };
  
  return (
    <div className="counter-section">
      <div className="counter__buttons--count">
        <div className="counter__button">
          <h1>{sub_count}</h1>
          <button className="btn__button" onClick={handleIncrementSub}>
            سبحان الله
          </button>
        </div>
        <div className="counter__button">
          <h1>{alh_count}</h1>
          <button className="btn__button" onClick={handleIncrementAlh}>
            ٱلْحَمْدُ لِلَّٰه
          </button>
        </div>
        <div className="counter__button">
          <h1>{allahuAkbar}</h1>
          <button className="btn__button" onClick={handleIncrementAllahu}>
            الله أكبر
          </button>
        </div>
      </div>
      <div className="container__buttons--reset">
        <div className="counter__button">
          <button className="btn__button" onClick={handleResetSub}>
            Rest
          </button>
        </div>
        <div className="counter__button">
          <button className="btn__button" onClick={handleResetAlh}>
            Rest
          </button>
        </div>
        <div className="counter__button">
          <button className="btn__button" onClick={handleResetAllahu}>
            Rest
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
