import React, { useState } from "react";
import Calculate from "./../component/Calculate";

function Button({ children }) {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("");

  const readNumber = (number) => {
    setNumber1(number1 + number);
  };
  const handleClickOperator = (operatorButton) => {
    setOperator(operatorButton);
    setNumber2(number1);
    setNumber1("");
  };
  return (
    <>
      <div>
        <div>{number1}</div>
      </div>

      <div>
        <button onClick={() => readNumber("1")}>1</button>
        <button onClick={() => readNumber("2")}>2</button>
        <button onClick={() => readNumber("3")}>3</button>
        <button onClick={() => handleClickOperator("+")}>+</button>
      </div>
      <div>
        <button onClick={() => readNumber("4")}>4</button>
        <button onClick={() => readNumber("5")}>5</button>
        <button onClick={() => readNumber("6")}>6</button>
        <button onClick={() => handleClickOperator("-")}>-</button>
      </div>
      <div>
        <button onClick={() => readNumber("7")}>7</button>
        <button onClick={() => readNumber("8")}>8</button>
        <button onClick={() => readNumber("9")}>9</button>
        <button onClick={() => handleClickOperator("*")}>*</button>
      </div>
      <div>
        <button onClick={() => readNumber("0")}>0</button>
        <button onClick={() => readNumber(".")}>.</button>
        <button
          onClick={() => Calculate(setNumber1, number1, operator, number2)}
        >
          =
        </button>
        <button onClick={() => handleClickOperator("/")}>/</button>
      </div>
    </>
  );
}

export default Button;
