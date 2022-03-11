// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, Component } from "preact";
import { Todo } from "../../todolist/interface";

interface TodoItemProps {
    todo: Todo
    onEnd: (todo: Todo) => void
    onDelete: (todo: Todo) => void
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TodoItemStats { }

export default class TodoItemComponent extends Component<TodoItemProps, TodoItemStats> {


    constructor(props: TodoItemProps) {
        super(props);
    }

    end = (event: Event) => {
        event.preventDefault();
        this.props.onEnd(this.props.todo);
    }

    delete = (event: Event) => {
        event.preventDefault();
        this.props.onDelete(this.props.todo);
    }

    render({ todo }: TodoItemProps,) {
        return (
            <li class={`d-flex list-group-item ${todo.isFinished ? "list-group-item-success" : ""}`}>
                <input class="form-check-input me-1" type="checkbox" onChange={this.end} />
                {todo.title}
                <button class="ms-auto btn btn-outline-danger btn-sm" type="button" onClick={this.delete}>Delete</button>
            </li>
        )
    }

}