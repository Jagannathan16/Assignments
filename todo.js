class Todo {
    static nextId = 0;
    constructor(title) {
      Todo.nextId++;
      this.id = Todo.nextId;
      this.title = title;
      this.completed = false;
    }
  }
  
  // ---------------------------------------
  // Service
  // ---------------------------------------
  
class TodoService {
    list = [];
    addTodo(title) {
        let todo = new Todo(title);
        this.list.push(todo);
    }
    editTodo(id, newTitle) {
        this.list.find(n=>n.id == id).title = newTitle;
    }
    completeTodo(id) {
        this.list.find(n=>n.id == id).completed = true;
    }
    completeAll() {
        const bool = this.list.every(n=> n.completed != false);
        this.list.map(n=> n.completed = !bool);
    }
    deleteTodo(id) {
        this.list = this.list.filter(n=>n.id != id);
    }
    clearCompleted() {
        this.list = this.list.filter(n=>n.completed != true);
    }
    viewTodos(flag) {
        if(flag == "all"){
            console.log(this.list);
        }else if(flag == "completed"){
            console.log(this.list.filter(n=>n.completed == true))
        }else{
            console.log(this.list.filter(n=>n.complete == false))
        }
    }
  }
console.log("hello");
let todoService = new TodoService();
todoService.addTodo("item-1");
todoService.addTodo("item-2");
todoService.addTodo("item-three");
// todoService.editTodo(2,"item-one");
// todoService.completeTodo(2);
// todoService.deleteTodo(2);
// todoService.clearCompleted();
// todoService.completeAll();
todoService.completeAll();
todoService.completeAll();
console.log(todoService.viewTodos("all"));
  