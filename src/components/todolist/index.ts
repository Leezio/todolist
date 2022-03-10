import { Todo } from "./interface";

export default class TodoList {

    public todos: Todo[] = []

    private getRandomId(): string {
        return Math.random().toString(36).substring(2, 9);
    }

    public add(title: string): void {
        this.todos = [{
            id: this.getRandomId(),
            title,
            isFinished: false,
            createdAt: new Date(),
        }, ...this.todos];
    }

    public end(id: string): void {
        this.todos = this.todos.map(todo => todo.id === id ? { ...todo, isFinished: true } : todo);
    }

    public delete(id: string): void {
        const index = this.todos.findIndex(todo => todo.id === id);
        this.todos = this.todos.slice(0, index);
    }

    public deleteCompleted(): void {
        this.todos = this.todos.filter(todo => todo.isFinished === true);
    }
}