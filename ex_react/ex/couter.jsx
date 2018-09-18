import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { inc, dec, mudancaPasso } from './counterActions'

const Couter = props => (
    <div>
        <h1>{props.couter.numero}</h1>
        <input onChange={props.mudancaPasso} value={props.couter.passo} type='number' />
        <button onClick={props.dec}> Dec </button>
        <button onClick={props.inc}> Inc </button>
    </div>
)

const mapStateToProps = state => ({ couter: state.couter })

const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, mudancaPasso }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Couter)
