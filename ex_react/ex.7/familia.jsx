import React from 'react'
import {childrenWithProps} from '../Utils/reactUtils'

export default props => (
    <div>
        <h1>Familia:</h1>
         { childrenWithProps(props.children, props) }
    </div>
)