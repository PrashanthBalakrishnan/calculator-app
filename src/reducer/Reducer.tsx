import { evaluate } from "../utils/utils";

export const enum ACTIONS {
  ADD_DIGIT,
  CHOOSE_OPERATION,
  CLEAR,
  DELETE_DIGIT,
  EVALUATE,
}

export const initState = {
  currentOperand: "",
  previousOperand: "",
  operation: "",
  overwrite: false,
};

export type ReducerAction = {
  type: ACTIONS;
  payload?: {
    digit?: string;
    operation?: string;
  };
};

export function reducer(
  state: typeof initState,
  { type, payload }: ReducerAction
): typeof initState {
  switch (type) {
    // ADDS A DIGIT TO THE CURRENT OPERAND
    case ACTIONS.ADD_DIGIT: {
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload?.digit ?? "",
          overwrite: false,
        };
      }
      if (state.currentOperand.length > 14 || state.previousOperand.length > 14)
        return state;
      if (payload?.digit === "0" && state.currentOperand === "0") return state;
      if (payload?.digit === "." && state.currentOperand.includes("."))
        return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload?.digit}`,
      };
    }

    // CHOOSE CURRENT OPERATION AND EVALUATE IF POSSIBLE
    case ACTIONS.CHOOSE_OPERATION: {
      if (state.currentOperand === "" && payload?.operation === "-") {
        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload?.operation}`,
        };
      }
      if (state.currentOperand === "-") {
        return {
          ...state,
          operation: payload?.operation ?? "",
        };
      }
      if (state.currentOperand === "" && state.previousOperand === "")
        return state;

      if (state.currentOperand === "")
        return { ...state, operation: payload?.operation ?? "" };

      if (state.previousOperand === "") {
        return {
          ...state,
          operation: payload?.operation ?? "",
          previousOperand: state.currentOperand,
          currentOperand: "",
        };
      }
      return {
        ...state,
        operation: payload?.operation ?? "",
        previousOperand: evaluate(state),
        currentOperand: "",
      };
    }
    case ACTIONS.CLEAR: {
      return initState;
    }

    // DELETS A DIGIT FROM THE CURRENT OPERAND
    case ACTIONS.DELETE_DIGIT: {
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: "",
        };
      }
      if (state.currentOperand === "") return state;
      if (state.currentOperand.length === 1)
        return { ...state, currentOperand: "" };

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    }

    // EVALUATE THE CURRENT OPERATION
    case ACTIONS.EVALUATE: {
      if (state.currentOperand.length > 14 || state.previousOperand.length > 14)
        return {
          ...state,
          currentOperand: "ERROR - TOO LONG",
        };
      if (
        state.currentOperand === "" ||
        state.previousOperand === "" ||
        state.operation === ""
      )
        return state;
      return {
        ...state,
        currentOperand: evaluate(state),
        previousOperand: "",
        operation: "",
        overwrite: true,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
