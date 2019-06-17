import { Increase, Decrease } from "../action/constants";

const defaultState = {
  step: 0
};

const StepReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Increase: {
      state.step++;
      return { ...state };
    }
    case Decrease: {
      state.step--;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default StepReducer;
