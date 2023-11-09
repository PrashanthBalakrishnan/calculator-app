import DigitButton from "../digitbuttons/DigitButton";
import "./calculator.scss";
import { useReducer } from "react";
import { ACTIONS, initState, reducer } from "../../reducer/Reducer";
import OperationButton from "../operationButton/OperationButton";
import Themeselector from "../themeselector/Themeselector";
import { formatOperand } from "../../utils/utils";

const Calculator = () => {
  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(
    reducer,
    initState
  );
  console.log(previousOperand, currentOperand, operation);
  return (
    <main className="calculator">
      <header className="calculator__header">
        <h1>calc</h1>
        <Themeselector />
      </header>
      <div>
        <div className="calculator__screen">
          <small className="calculator__previous">{previousOperand}</small>
          <span>
            {formatOperand(currentOperand)} {operation}
          </span>
        </div>
      </div>
      <div className="calculator__buttons">
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <button
          className="calculator__del-reset"
          onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
        >
          DEL
        </button>
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />

        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <OperationButton operation="÷" dispatch={dispatch} />
        <OperationButton operation="x" dispatch={dispatch} />
        <button
          className="span-two calculator__del-reset"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          RESET
        </button>
        <button
          className="span-two calculator__equal"
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        >
          =
        </button>
      </div>
    </main>
  );
};
export default Calculator;
