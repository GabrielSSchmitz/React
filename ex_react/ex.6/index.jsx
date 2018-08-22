import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './familia'
import Membros from './membros'

ReactDOM.render(
    <Familia>
        <Membros nome='Gabriel' sobrenome='Schmitz'/>
    </Familia>

    , document.getElementById('app')
)