import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

//import react-router
import { connectRouter, routerMiddleware } from "connected-react-router";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
