import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './field'

const reducers = combineReducers({
    field: () => ({ value: 'opa2' })
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field valorInicial='Teste' />
    </Provider>
    , document.getElementById('app')
)   