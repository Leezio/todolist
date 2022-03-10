import { h, Component } from "preact";
import { Todo } from "../interface";
import TodoList from '../index'

interface TodoListProps {
    name: string
}

interface TodoListStats {
    todos: Todo[]
}

export default class TodoListComponent extends Component<TodoListProps, TodoListStats> {

    private todolist: TodoList = new TodoList();

    constructor(props: TodoListProps) {
        super(props);
        this.todolist.add('Test 1');
        this.todolist.add('Test 2');
        this.state = {
            todos: this.todolist.todos
        }
    }

    render({ name }: TodoListProps, { todos }: TodoListStats) {
        return (
            <ul class="list-group">
                {todos.map(todo => {
                    return <li class="list-group-item">{todo.title}</li>
                })}
            </ul>
        )
    }

}