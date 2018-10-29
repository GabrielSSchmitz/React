
import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

	constructor(props) {
		super(props)
		this.state = { description: '', list: [] }

		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.handleRemove = this.handleRemove.bind(this)
		this.handMarkAsDone = this.handMarkAsDone.bind(this)
		this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
		this.hanldeSearch = this.hanldeSearch.bind(this)
		this.hanldeClean = this.hanldeClean.bind(this)

		this.refresh()
	}

	refresh(description = '') {
		console.log('[REFRESH] Consulta realizada com sucesso!')

		const search = description ? '&description__regex=/' + description + '/' : ''

		axios.get(URL + '?sort=-createdAt' + search).then(resp => this.setState({ ...this.setState, description, list: resp.data }))
	}

	handleChange(e) {
		console.log('[FUNCTION] handleChange(e)');

		this.setState({ ...this.state, description: e.target.value })
	}

	handleAdd() {
		console.log('[FUNCTION] handleAdd()')

		const description = this.state.description
		axios.post(URL, { description }).then(resp => (console.log('Tarefa cadastrada com sucesso!'), this.refresh()))

	}

	handleRemove(todo) {
		console.log('[FUNCTION] handleRemove(todo)')

		axios.delete(URL + '/' + todo._id).then(resp => (console.log('Tarefa removida com sucesso'), this.refresh(this.state.description)))
	}

	handMarkAsDone(todo) {
		console.log('[FUNCTION] handMarkAsDone(todo)')

		axios.put(URL + '/' + todo._id, { ...todo, done: true }).then(resp => (console.log('Tarefa marcada como concluida'), this.refresh(this.state.description)))
	}

	handleMarkAsPending(todo) {
		console.log('[FUNCTION] handleMarkAsPending(todo)')

		axios.put(URL + '/' + todo._id, { ...todo, done: false }).then(resp => (console.log('Tarefa marcada como pendente'), this.refresh(this.state.description)))
	}

	hanldeSearch() {
		console.log('[FUNCTION] hanldeSearch()')
		this.refresh(this.state.description)
	}

	hanldeClean() {
		console.log('[FUNCTION] hanldeClean()')

		this.refresh()
	}

	render() {
		return (
			<div>
				<PageHeader
					name='Tarefas'
					small='Cadastro'
				/>

				<TodoForm
					description={this.state.description}
					handleAdd={this.handleAdd}
					handleChange={this.handleChange}
					hanldeSearch={this.hanldeSearch}
					hanldeClean={this.hanldeClean}
				/>
				<TodoList
					list={this.state.list}
					handleRemove={this.handleRemove}
					handMarkAsDone={this.handMarkAsDone}
					handleMarkAsPending={this.handleMarkAsPending}
				/>
			</div>
		)
	}
}