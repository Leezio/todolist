# ToDo List

## ⚡️ Quickstart

### 🤖 Development

**Developing inside a container**

The Visual Studio Code Remote - Containers extension lets you use a Docker container as a full-featured development environment. The devcontainer.json file on the root of project tells VS Code how to access (or create) a development container with a well-defined tool and runtime stack. This container can be used to run an application or to separate tools, libraries, or runtimes needed for working with a codebase.

More info [here](https://code.visualstudio.com/docs/remote/containers)

**Developing inside local environment**
```bash
npm install
```

**Start development server**

- Enable live compilation
    ```bash
    make autocompile
    ```
- Enable dev server
    ```bash
    make start
    ```

## ⚙️ Installation

To compile from sources:
```bash
make build
```
### 👀 For locat test

**To run local server:** *Requires compiling sources*
```bash
make start
```

## 🎯 Features
- Create a new ToDo
- Change the status of a ToDo to 'Done', 'To do'
- Delete a ToDo
- Delete all completed ToDos

## 👍 Contribute

If you want to support the active development of `ToDo List`:

1. Add a [GitHub Star](https://github.com/Leezio/todolist) to the project.
3. Write a review or tutorial on [Medium](https://medium.com/), [Dev.to](https://dev.to/) or personal blog.
