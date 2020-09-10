import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "./reducer";


const customMiddleWare = store => next => action => {
  
    next(action);
}


export default function configureStore(initialState) {
  const env = process.env.REACT_APP_ENV;
  
  const isDevelopment = env !== "production" && env !== "staging";

  // Use below store for production version
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = isDevelopment
    ? createStore(
        reducer,
        initialState,
        // composeEnhancers(applyMiddleware(promise, thunkMiddleware, logger, customMiddleWare))
        composeEnhancers(applyMiddleware(promise, thunkMiddleware, customMiddleWare))

      )
    : createStore(
        reducer,
        initialState,
        compose(applyMiddleware(promise, thunkMiddleware, customMiddleWare))
      );

  return store;
}
