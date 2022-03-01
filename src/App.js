import './App.css';
import React, { useState } from "react"

function App() {

  const [number1, setNumber1] = useState("0");
  const [number2, setNumber2] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState(0, false);
  const [hasResult, setHasResult] = useState(false);

  function clickNumber(val) {
    if (!hasResult) {
      if (number1 === "0" && !currentOperation) {
        setNumber1("" + val);
  
      } else if ( currentOperation && !(val === "." && number2.includes("."))) {
        setNumber2(number2 + val);
  
      } else if (!currentOperation && !(val === "." && number1.includes("."))) {
        setNumber1(number1 + val);
      }

    } else {
      allClear();
      console.log("hola")
      setNumber1("" + val);
    }
  }

  function clickOperation(val) {
    if (!hasResult && !number2) {
      setCurrentOperation(val);

    } else {
      setHasResult(false);
      setNumber1(result);
      setNumber2("");
      setCurrentOperation(val);
    }
  }

  function getResult() {
    if (!result) {
      switch (currentOperation) {
        case "+":
          setResult(Number(number1) + Number(number2));
          setHasResult(true);
          break;

        case "-":
          setResult(Number(number1) - Number(number2));
          setHasResult(true);
          break;

        case "*":
          setResult(Number(number1) * Number(number2));
          setHasResult(true);
          break;

        case "/":
          setResult(Number(number1) / Number(number2));
          setHasResult(true);
          break;
      }

    } else {
      switch (currentOperation) {
        case "+":
          setResult(result + Number(number2));
          setHasResult(true);
          break;

        case "-":
          setResult(result - Number(number2));
          setHasResult(true);
          break;

        case "*":
          setResult(result * Number(number2));
          setHasResult(true);
          break;

        case "/":
          setResult(result / Number(number2));
          setHasResult(true);
          break;
      }
    }
  }

  function delNumber() {
    if (!hasResult) {
      if (!currentOperation) {
        setNumber1(number1.slice(0, -1))

      } else {
        setNumber2(number2.slice(0, -1))
      }
    }
  }

  function allClear() {
    setNumber1("0");
    setNumber2("");
    setCurrentOperation("");
    setResult(0);
    setHasResult(false);
  }

  return (
    <div className="App">
      <h1 className="title">React Calculator</h1>

      <div className="calculator-wrap">
        <div className="output">
          <div className="previous-operand">
            {!hasResult ? (currentOperation ? number1 + currentOperation : "") : number1 + currentOperation + number2 + "="}
          </div>
          
          <div className="current-operand">
            {hasResult ? result : (!currentOperation ? number1 : number2)}
          </div>
        </div>

        <button onClick={allClear} className="span-two">AC</button>
        <button onClick={delNumber}>DEL</button>
        <button onClick={() => { clickOperation("/") }}>/</button>
        <button onClick={() => { clickNumber(7) }}>7</button>
        <button onClick={() => { clickNumber(8) }}>8</button>
        <button onClick={() => { clickNumber(9) }}>9</button>
        <button onClick={() => { clickOperation("*") }}>*</button>
        <button onClick={() => { clickNumber(4) }}>4</button>
        <button onClick={() => { clickNumber(5) }}>5</button>
        <button onClick={() => { clickNumber(6) }}>6</button>
        <button onClick={() => { clickOperation("+") }}>+</button>
        <button onClick={() => { clickNumber(1) }}>1</button>
        <button onClick={() => { clickNumber(2) }}>2</button>
        <button onClick={() => { clickNumber(3) }}>3</button>
        <button onClick={() => { clickOperation("-") }}>-</button>
        <button onClick={() => { clickNumber(".") }}>.</button>
        <button onClick={() => { clickNumber(0) }}>0</button>
        <button onClick={getResult} className="span-two">=</button>
      </div>
    </div>
  );
}

export default App;
