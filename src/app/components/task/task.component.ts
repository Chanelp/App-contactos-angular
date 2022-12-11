import { Component, Input, OnInit } from '@angular/core';
import { ITask, LEVELS } from 'src/app/models/tasks.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask = {
    title: '',
    description: '',
    completed: false,
    level: LEVELS.INFO
  };

  constructor() { }

  ngOnInit(): void {
  }

}
