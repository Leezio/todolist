// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, render } from 'preact'
import TodoListComponent from './components/todolist/view'

const todolist = document.querySelector("main#todolist")

render(<TodoListComponent name="My new todo list"/>, todolist)