import React, { Component } from 'react'

export default class ClasseComponente extends Component {
    
    constructor(props){
        super(props)
        this.state = { value: props.valorInicial }
    }

    somar(delta){
        this.setState({ value: this.state.value + delta })
    }
    
    render(){
        return(
            <div>
                <h1>{ this.props.label }</h1>
                <h2>{ this.state.value }</h2>
                <button onClick={ () => this.somar(-1) }>Dec</button>  
                <button onClick={ () => this.somar(1) }>Inc</button>  
            </div>
        )
    }
}