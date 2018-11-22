import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos : Todo[];
  constructor(private todoservice : TodoService) { }

  ngOnInit() {    
    this.todoservice.gettodos().subscribe(restodo => this.todos = restodo);
  }

  addTodo(event, todoText){
    var todoobj = {
      fname : todoText.value, lname :"Padole"
    };
    var result = this.todoservice.savetodos(todoobj).subscribe(restodo => this.todos = restodo);
    todoText.value = "";
  }

  deleteto(todo){
    var todos = this.todos;
    this.todoservice.deletetodo(todo._id).subscribe(data =>{
      if(data == 1){
        this.todos.splice(todo, 1);
        console.log();
      }
    });
    alert(todo.fname);
    this.todos.splice(todo, 1);
  }
  updatetodo(todo){
    this.todoservice.updatetodo(todo._id  ).subscribe(data => data);
  }
}
