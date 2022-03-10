import { h, Component } from "preact";
import { Todo } from "../interface";
import TodoList from '../index'
import TodoItemComponent from "../../todoitem/view";

interface TodoListProps {
    name: string
}

interface TodoListStats {
    todos: Todo[]
}

export default class TodoListComponent extends Component<TodoListProps, TodoListStats> {

    private todolist: TodoList = new TodoList();
    private end: (todo: Todo) => void
    private delete: (todo: Todo) => void

    constructor(props: TodoListProps) {
        super(props);
        this.state = {
            todos: []
        }
        this.todolist.onChange((todolist) => {
            this.setState({ todos: todolist.todos })
        })
        this.end = this.todolist.end.bind(this.todolist)
        this.delete = this.todolist.delete.bind(this.todolist)
    }

    componentDidMount(): void {
        this.todolist.add('Test 1')
        this.todolist.add('Test 2')
    }

    render({ name }: TodoListProps, { todos }: TodoListStats) {
        return (
            <div>
                <ul class="list-group">
                    {todos.map(todo => {
                        return <TodoItemComponent todo={todo} onEnd={this.end} onDelete={this.delete} />
                    })}
                </ul>
                <div class="d-grid gap-2 d-sm-flex mt-3 justify-content-sm-center">
                    <button class="btn btn-success px-4 gap-3" type="button">Add</button>
                    <button class="btn btn-outline-warning px-4" type="button">Clear</button>
                </div>
            </div>
        )
    }

}