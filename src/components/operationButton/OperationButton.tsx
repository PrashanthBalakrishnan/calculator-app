import "./operationbutton.scss";
import { ACTIONS, ReducerAction } from "../../reducer/Reducer";

interface OperationButtonProps {
  operation: string;
  dispatch: React.Dispatch<ReducerAction>;
}

const OperationButton: React.FC<OperationButtonProps> = ({
  operation,
  dispatch,
}) => {
  return (
    <button
      className="operationbutton"
      onClick={() =>
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation },
        })
      }
    >
      {operation}
    </button>
  );
};
export default OperationButton;
