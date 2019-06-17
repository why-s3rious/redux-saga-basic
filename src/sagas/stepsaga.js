import { Increase, Decrease } from "../redux/action/constants";
import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

export function* sayHello() {
  console.log("say hello to EveryOne");
}
function* IncreaseSaga() {
  console.log("Increase Saga");
}

export function* watchIncrease() {
  console.log("watchIncrease");

  yield takeEvery(Increase, IncreaseSaga);
  // takeevery se theo doi cac action neu co se thay doi no se tu dong chay ham IncreaseSaga
}

function* DecreaseSaga() {
  console.log("Decrease Saga");
}
export function* watchDecrease() {
  console.log("watchDecrease");
  yield takeEvery(Decrease, DecreaseSaga);
  // takeevery se theo doi cac action neu co se thay doi no se tu dong chay ham IncreaseSaga
}
