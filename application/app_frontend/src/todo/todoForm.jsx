import React from 'react'
import Grid from '../template/grid'
import Button from '../template/iconButton'

export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.hanldeSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.hanldeClean()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input
                    id='description'
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                />
            </Grid>

            <Grid cols='12 3 2'>
                <Button
                    style='primary'
                    icon='plus'
                    onClick={props.handleAdd}
                />

                <Button
                    style='info'
                    icon='search'
                    onClick={props.hanldeSearch}
                />

                <Button
                    style='default'
                    icon='close'
                    onClick={props.hanldeClean}
                />
            </Grid>
        </div>
    )
}