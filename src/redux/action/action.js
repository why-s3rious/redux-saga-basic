import { Increase, Decrease } from "./constants";

export const OnIncrease = step => {
  return {
    type: Increase,
    step
  };
};
export const OnDecrease = step => {
  return {
    type: Decrease,
    step
  };
};
