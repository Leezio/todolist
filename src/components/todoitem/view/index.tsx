import { h, Component } from "preact";
import { Todo } from "../../todolist/interface";

interface TodoItemProps {
    todo: Todo
}

interface TodoItemStats {}

export default class TodoItemComponent extends Component<TodoItemProps, TodoItemStats> {


    constructor(props: TodoItemProps) {
        super(props);
    }

    render({ todo }: TodoItemProps,) {
        return <li class={`list-group-item ${todo.isFinished ? "list-group-item-success" : ""}`}>{todo.title}</li>
    }

}