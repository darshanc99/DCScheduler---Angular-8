import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DCScheduler';
  todos = [
  ];

  addTodo(todo,priority,done){
    var newTodo = {
    label: todo,
    priority: priority,
    done: done
    };
    this.todos.push(newTodo)
  }

  deleteTodo(todo){
    this.todos = this.todos.filter(t => t.label != todo.label);
  }    
}