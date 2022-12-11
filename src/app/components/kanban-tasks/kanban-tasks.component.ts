import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// Importamos el modelo de ITasks
import { ITask, LEVELS } from 'src/app/models/tasks.interface';

@Component({
  selector: 'app-kanban-tasks',
  templateUrl: './kanban-tasks.component.html',
  styleUrls: ['./kanban-tasks.component.scss'],
})
export class KanbanTasksComponent {

  todoTasks: ITask[] = [
    {
      title: 'Animaciones',
      description: 'Aprender Animaciones en Angular',
      completed: false,
      level: LEVELS.INFO
    },
    {
      title: 'Angular CLI',
      description: 'Aprender comandos y configuraciones de Angular CLI',
      completed: false,
      level: LEVELS.URGENT
    },
    {
      title: 'Build',
      description: 'Aprender a generar builds con Angular CLI',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Deploy',
      description: 'Aprender a desplegar bundles en Firebase',
      completed: false,
      level: LEVELS.URGENT
    }
  ];

  doneTasks: ITask[] = [
    {
      title: 'Configuración IDE',
      description: 'Configurar e instalar plugins en VSC',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Instalar Angular',
      description: 'Instalar con NPM el Angular CLI de forma global',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Hola Mundo',
      description: 'Crear con Angular un proyecto inicial',
      completed: true,
      level: LEVELS.URGENT
    }
  ];

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      // Actualizamos el valor completed d ela tarea - Gestionando el cambio del estado
      event.previousContainer.data[event.previousIndex].completed = !event.previousContainer.data[event.previousIndex].completed;

      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
