import { Todo } from "./interface";

declare type ChangeCallback = (todolist: TodoList) => void

export default class TodoList {

    private callbacks: ChangeCallback[] = []
    public todos: Todo[] = []

    private getRandomId(): string {
        return Math.random().toString(36).substring(2, 9)
    }

    private propagation(){
        this.callbacks.forEach(callback => callback(this))
    }


    public onChange(callback: ChangeCallback){
        this.callbacks.push(callback)
    }

    public add(title: string): void {
        this.todos = [{
            id: this.getRandomId(),
            title,
            isFinished: false,
            createdAt: new Date(),
        }, ...this.todos];
        this.propagation()
    }

    public end(todo: Todo): void {
        this.todos = this.todos.map(currentTodo => currentTodo.id === todo.id ? { ...currentTodo, isFinished: (currentTodo.isFinished ? false : true) } : currentTodo)
        this.propagation()
    }

    public delete(todo: Todo): void {
        const index = this.todos.findIndex(currentTodo => currentTodo.id === todo.id)
        this.todos = this.todos.slice(0, index)
        this.propagation()
    }

    public deleteCompleted(): void {
        this.todos = this.todos.filter(todo => todo.isFinished === true)
        this.propagation()
    }
}