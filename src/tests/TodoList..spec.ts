import ToDoList from '../components/todolist'

describe('Test ToDoList', () => {
    let todolist: ToDoList;

    beforeEach(() => todolist = new ToDoList());

    test('Default empty list', () => {
        expect(todolist.todos.length).toBe(0);
    })

    test('Add new todo', () => {
        todolist.add('Test 1')
        expect(todolist.todos.length).toBe(1);
    })

    test('Delete todo', () => {
        todolist.add('Test 1')
        const index = todolist.todos.findIndex(currentTodo => currentTodo.title === 'Test 1')
        expect(todolist.todos.length).toBe(1);
        todolist.delete(todolist.todos[index])
        expect(todolist.todos.length).toBe(0);
    })

    test('Change todo status', () => {
        todolist.add('Test 1')
        const index = todolist.todos.findIndex(currentTodo => currentTodo.title === 'Test 1')
        expect(todolist.todos[index].isFinished).toBe(false);
        todolist.end(todolist.todos[index])
        expect(todolist.todos[index].isFinished).toBe(true);
    })

    test('Delete all completed todo', () => {
        todolist.add('Test 1')
        todolist.add('Test 2')
        todolist.add('Test 3')
        const index = todolist.todos.findIndex(currentTodo => currentTodo.title === 'Test 1')
        todolist.end(todolist.todos[index])
        expect(todolist.todos.length).toBe(3);
        todolist.deleteCompleted()
        expect(todolist.todos.length).toBe(2);
    })

});