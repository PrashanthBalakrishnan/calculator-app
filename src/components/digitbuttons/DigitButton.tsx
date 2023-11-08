import "./digitbutton.scss";

import { ACTIONS, ReducerAction } from "../../reducer/Reducer";

interface DigitButtonProps {
  digit: string;
  dispatch: React.Dispatch<ReducerAction>;
}

const DigitButton: React.FC<DigitButtonProps> = ({ digit, dispatch }) => {
  return (
    <button
      className="digitbutton"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};
export default DigitButton;
