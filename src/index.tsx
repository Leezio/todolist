import { h, render } from 'preact'
import TodoListComponent from './components/todolist/view'

const todolist = document.querySelector("div#todolist")

render(<TodoListComponent name="test"/>, todolist)