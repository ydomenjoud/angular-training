let todoCounter = 0;

class Todo {
  title: string;

  date: Date;

  num = todoCounter++;

  constructor(title = '', date = new Date()) {
    this.title = title;
    this.date = date;
  }
}

class TodosList {
  private list = [];

  get todosList() {
    return this.list;
  }

  static nextNum() {
    return todoCounter + 1;
  }

  addMultipleTodos(...todos: Todo[]) {
    console.log(todos.length);
    this.list.push(...todos);
  }

  editTodo(todo: Todo) {
    const {num} = todo;
    this.list[num] = todo;
  }
}

//  create todo
// const newTodo1 = new Todo('wash my cr');
// const newTodo2 = new Todo('wash my room');
// const newTodo3 = new Todo('wash my dishes');

// const [newTodo1, newTodo2, newTodo3] = [
//   new Todo('wash my cr'),
//   new Todo('wash my room'),
//   new Todo('wash my dishes')
// ];

// const [newTodo1, newTodo2, newTodo3]: Todo[] = ['cr', 'room', 'dishes'].map( title => new Todo('wash my ' + title));


// add todo to newly created store
const store = new TodosList();
store.addMultipleTodos(...['cr', 'room', 'dishes'].map(title => new Todo(`wash my ${title}`)));

// console.log(store.todosList);

const [newTodo1, , newTodo2] = store.todosList;

newTodo1.title = 'wash my cars';
store.editTodo(newTodo1);


newTodo2.title = 'wash my dish';
store.editTodo(newTodo1);

console.log(store.todosList);
