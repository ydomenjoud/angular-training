
class Todo {
  constructor(title = '', date = new Date()) {
    this.title = title;
    this.date = date;
    this.plop = 'qsd';
  }
}


class TodosList {
  constructor() {
    this.list = [];
  }
  addTodo(todo) {
    this.list.push(todo);
  }
}

//  create todo
const todo = new Todo('wash my car');

// add todo to newly created store
const store = new TodosList();
store.addTodo(todo);

console.log(store);
