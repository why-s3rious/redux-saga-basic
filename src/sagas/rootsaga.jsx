import { delay } from "redux-saga";
import { all } from "redux-saga/effects";
import { sayHello, watchDecrease, watchIncrease } from "./stepsaga";
export default function* rootsaga() {
  yield all([sayHello(), watchDecrease(), watchIncrease()]);
}
