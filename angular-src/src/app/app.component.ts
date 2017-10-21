import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import izitoast from 'izitoast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  completedItems: Object[];
  incompleteItems: Object[];

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
        this.incompleteItems = data.data.filter(function (el) {
          return el.completed === false;
        });
        this.completedItems = data.data.filter(function (el) {
          return el.completed === true;
        });
      } else {
        this.showErrorMsg();
      }
    });
  }

  addNewItem() {
    const newItem = {
      item: this.newItem
    };

    this.todoService.add(newItem).subscribe(data => {
      if (data.status) {
        this.showSuccessMsg('Saved!', 'Your new task is saved!');
        this.newItem = '';
        this.getAllTasks();
      } else {
        this.showErrorMsg();
      }
    });

  }

  setItemCompleted(item) {
    this.todoService.setCompleted(item._id).subscribe(data => {
      if (data.status) {
        this.showSuccessMsg('Done!', 'Your task is marked as done!');
        this.getAllTasks();
      } else {
        this.showErrorMsg();
      }
    });
  }

  editItem(item) {
    this.todoService.edit(item._id, { newItem: item }).subscribe(data => {
      console.log(data);
      if (data.status) {
        this.showSuccessMsg('Editied!', 'Task edited!');
      } else {
        this.showErrorMsg();
      }
    });
  }

  deleteItem(item, completed) {
    this.todoService.delete(item._id).subscribe(data => {
      if (data.status) {
        this.showSuccessMsg('Removed!', 'Your task is removed!');

        let index = -1;
        if (completed) {
          index = this.completedItems.indexOf(item);
        } else {
          index = this.incompleteItems.indexOf(item);
        }

        if (index > -1) {
          if (completed) {
            this.completedItems.splice(index, 1);
          } else {
            this.incompleteItems.splice(index, 1);
          }
        }

      } else {
        this.showErrorMsg();
      }
    });
  }


  showErrorMsg() {
    izitoast.error({
      title: 'Error',
      message: 'Something went wrong!',
      position: 'topCenter'
    });
  }

  showSuccessMsg(title, msg) {
    izitoast.success({
      title: title,
      message: msg,
      position: 'topCenter'
    });
  }

}

