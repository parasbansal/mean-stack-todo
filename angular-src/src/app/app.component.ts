import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import izitoast from 'izitoast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: Object[];

  newItem: String;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.todoService.getAll().subscribe(data => {
      if (data.status) {
        this.items = data.data;
      } else {
        izitoast.error({
          title: 'Error',
          message: 'Something went wrong!',
          position: 'topCenter'
        });
      }
    });
  }

  addNewItem() {
    const newItem = {
      item: this.newItem
    };

    this.todoService.add(newItem).subscribe(data => {
      if (data.status) {
        izitoast.success({
          title: 'Saved!',
          message: 'Your new task is saved!',
          position: 'topCenter'
        });
        this.newItem = '';
        this.getAllTasks();
      } else {
        izitoast.error({
          title: 'Error',
          message: 'Something went wrong!',
          position: 'topCenter'
        });
      }
    });

  }

  deleteItem(task) {
    this.todoService.delete(task._id).subscribe(data => {
      if (data.status) {
        izitoast.success({
          title: 'Removed!',
          message: 'Your task is removed!',
          position: 'topCenter'
        });

        const index = this.items.indexOf(task);

        if (index > -1) {
          this.items.splice(index, 1);
        }

      } else {
        izitoast.error({
          title: 'Error',
          message: 'Something went wrong!',
          position: 'topCenter'
        });
      }
    });
  }

}
