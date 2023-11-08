
import {createStore ,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getTag,getRandom,getRandombyTag} from '../Redux/Reducers/QuoteReducer';
import thunk from 'redux-thunk';

const reducer=combineReducers(
    {
        getTag: getTag,
        getRandom: getRandom,
        getRandombyTag:getRandombyTag,
    }
)
const middlewire=[thunk];
const store=createStore (
     reducer,
    composeWithDevTools(applyMiddleware(...middlewire))

);
export default store;