import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeLatest, put } from "redux-saga/effects";
import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import axios from 'axios';

// this startingPlantArray should eventually be removed
const startingPlantArray = [
  { id: 1, name: 'Rose' },
  { id: 2, name: 'Tulip' },
  { id: 3, name: 'Oak' }
];

function* getPlants() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/plants",
    });
    yield put({
      type: "SET_PLANTS",
      payload: response.data,
    });
  } catch(error) {
    alert("SAGA GET error", error);
  }
}

const plantList = (state = startingPlantArray, action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return [ ...state, action.payload ]
    default:
      return state;
  }
};


function* rootSaga() {
  yield takeLatest("GET_PLANTS", getPlants);
}


const sagaMiddleware = createSagaMiddleware();


const plantReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PLANTS":
      return action.payload;
    default:
      return state;
  }
}

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// Note that the store is currently not
// configured to utilize redux-saga OR
// redux logger!
const store = createStore(
  combineReducers({ 
    plantList,
    plantReducer,

   }),

  applyMiddleware(sagaMiddleware, logger)
);
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥


sagaMiddleware.run(rootSaga);

export default store;
