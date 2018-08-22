import React, { Component } from 'react'

export default class Field extends Component {

    constructor(props){
        super(props)
        this.state = { value: props.valorInicial }
        this.verificaMudanca = this.verificaMudanca.bind(this)
    }

    verificaMudanca(event){
        this.setState({ value: event.target.value })   
    }

    render(){
        return (
            <div>
                <label>{ this.state.value }</label> <br />
                <input onChange={ this.verificaMudanca } value={ this.state.value || ""} />
            </div>
        )
    }
}