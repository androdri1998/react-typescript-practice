import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { IApplicationState } from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store: Store<IApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
