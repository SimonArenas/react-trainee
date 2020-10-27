import React, { useState } from "react";
import "./Counter.css";

export function SuccessMessage({ goal }) {
  return (
    <p className="success-message">{`Congrats!! You reach the step: ${goal}`}</p>
  );
}

export function CounterView() {
  let value = 0;
  const [clickSet, setClickSet] = useState(false);
  const [resetSet, setResetSet] = useState(false);
  const [step, setStep] = useState();
  const [goal, setGoal] = useState();
  const [counter, setCounter] = useState(value);

  const handleSet = () => {
    setClickSet(!clickSet);
    setResetSet(!resetSet);
  };
  const handleReset = () => {
    setCounter(value);
    setGoal(value);
    setClickSet(false);
    setResetSet(false);
  };
  const handleStepChange = (e) => {
    setStep(e.target.value);
  };
  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };
  const addButton = () => {
    setCounter(counter + Number(step));
  };
  const substractButton = () => {
    setCounter(counter - Number(step));
  };
  return (
    <main className="main">
      <div className="counter-card">
        <h1 className="counter-card__title">JS NG 2020 Counter</h1>
        <form className="counter-form">
          <div style={{ display: "flex", marginBottom: "32px", width: "100%" }}>
            <div className="counter-form__container">
              <div className="field_first">
                <label htmlFor="step">STEP</label>
                <input
                  className="counter-form__input"
                  disabled={clickSet}
                  name="step"
                  type="number"
                  onChange={handleStepChange}
                />
              </div>
              <div>
                <label htmlFor="step">GOAL</label>
                <input
                  className="counter-form__input"
                  disabled={clickSet}
                  name="goal"
                  type="number"
                  onChange={handleGoalChange}
                />
              </div>
            </div>
            <div className="counter-form__container">
              <div className="container-button container-button_first">
                <button
                  className="counter-form__button"
                  type="button"
                  onClick={handleSet}
                  disabled={(step && goal) === undefined || clickSet}
                >
                  SET
                </button>
              </div>
              <div className="container-button">
                <button
                  disabled={!resetSet}
                  className="counter-form__button"
                  type="button"
                  onClick={handleReset}
                >
                  RESET
                </button>
              </div>
            </div>
          </div>
          <div className="container-counter">
            <p className="counter">{counter}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              disabled={!clickSet || counter >= goal || counter == 0}
              className="counter-form__button counter-form__button_step"
              type="button"
              onClick={substractButton}
            >
              -
            </button>
            <button
              disabled={!clickSet || counter >= goal}
              className="counter-form__button counter-form__button_step"
              type="button"
              onClick={addButton}
            >
              +
            </button>
          </div>
        </form>
        {counter >= goal && counter + goal != 0 && (
          <SuccessMessage goal={goal} />
        )}
      </div>
    </main>
  );
}
