import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './familia'
import Membros from './membros'

ReactDOM.render(
    <Familia sobrenome='Schmitz'>
        <Membros nome='Gabriel'/>
        <Membros nome='Rafael'/>
        <Membros nome='Julia'/>
    </Familia>

    , document.getElementById('app')
)