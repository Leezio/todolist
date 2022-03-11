// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, Component } from "preact";
import { Todo } from "../interface";
import TodoList from '../index'
import TodoItemComponent from "../../todoitem/view";

interface TodoListProps {
    name: string
}

interface TodoListStats {
    todos: Todo[],
    newTodo: string,
}

export default class TodoListComponent extends Component<TodoListProps, TodoListStats> {

    private todolist: TodoList = new TodoList();
    private end: (todo: Todo) => void
    private delete: (todo: Todo) => void
    private deleteCompleted: () => void

    constructor(props: TodoListProps) {
        super(props);
        this.state = {
            todos: [],
            newTodo: "",
        }
        this.todolist.onChange((todolist) => {
            this.setState({ todos: todolist.todos })
        })
        this.end = this.todolist.end.bind(this.todolist)
        this.delete = this.todolist.delete.bind(this.todolist)
        this.deleteCompleted = this.todolist.deleteCompleted.bind(this.todolist)
    }

    componentDidMount(): void {
        this.todolist.add('Make chocolate cookies')
        this.todolist.add('Tidy up my room')
    }

    public keep = (event: Event) => {
        event.preventDefault();
        this.setState({
            newTodo: (event.target as HTMLInputElement).value
        })
    }

    public add = (event: Event) => {
        event.preventDefault();
        this.todolist.add(this.state.newTodo)
        this.setState({
            newTodo: ""
        })
    }

    render({ name }: TodoListProps, { todos, newTodo }: TodoListStats) {
        return (
            <div class="card shadow mb-5 p-2 bg-body rounded">
                <div class="card-body">
                    <h1 class="display-6 mb-4 text-center">{name}</h1>
                    <input class="form-control mb-3" type="text" value={newTodo} placeholder="Create a new cookie recipe" onInput={this.keep} />
                    <ul class="list-group">
                        {todos.map(todo => {
                            return <TodoItemComponent todo={todo} onEnd={this.end} onDelete={this.delete} />
                        })}
                    </ul>
                    <div class="d-grid gap-2 d-sm-flex mt-3 justify-content-sm-center">
                        <button class="btn btn-success px-4 gap-3" type="button" onClick={this.add}>Add</button>
                        <button class="btn btn-outline-warning px-4" type="button" onClick={this.deleteCompleted}>Clear</button>
                    </div>
                </div>
            </div>
        )
    }

}