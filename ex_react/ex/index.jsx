import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import CouterReducer from './couterReducer'
import Couter from './couter'

const reducers = combineReducers({
    couter : CouterReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Couter />
    </Provider>
    , document.getElementById('app')
)   