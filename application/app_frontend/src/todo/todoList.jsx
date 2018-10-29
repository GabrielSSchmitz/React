import React from 'react'

import Button from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <Button 
                        style='success' 
                        icon='check' 
                        onClick={() => props.handMarkAsDone(todo)} 
                        hide={todo.done}
                    />
                    <Button 
                        style='warning' 
                        icon='undo' 
                        onClick={() => props.handleMarkAsPending(todo)} 
                        hide={!todo.done}
                    />
                    <Button 
                        style='danger' 
                        icon='trash-o' 
                        onClick={() => props.handleRemove(todo)} 
                        hide={!todo.done}
                    />

                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ação</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}