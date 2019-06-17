import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Container from "./container/container";
import Store from "./redux/store";
import "./styles.css";
import Demso from "./component/demso";

//saga
import CreateSagaMiddleware from "redux-saga";
//root saga
import RootSaga from "./sagas/rootsaga";
//saga
const sagaMiddleware = CreateSagaMiddleware();

let store = createStore(Store, applyMiddleware(sagaMiddleware));
//store se chay xuyen suot app cho den khi app tat

function App() {
  return (
    <div className="App">
      <h3>bài tập đếm số cơ bản sử dụng redux-saga </h3>
    </div>
  );
}
sagaMiddleware.run(RootSaga);

//
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
    <Container />
  </Provider>,
  rootElement
);
