import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Gantt from 'frappe-gantt-angular15';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Make sure the path is correct
})
export class AppComponent implements AfterViewInit {
  @ViewChild('gantt') ganttEl!: ElementRef; // Non-null assertion operator

  name = 'Angular';

  // Declare the gantt property here
  gantt: any;

  tasks = [
    {
      id: 't1',
      name: 'TASK 1',
      start: '2021-12-31T13:21:54.530Z',
      end: '2021-12-31T13:51:54.530Z',
      progress: 47,
      dependencies: '',
    },
    {
      id: 't2',
      name: 'TASK 2',
      start: '2021-12-31T14:21:54.530Z',
      end: '2021-12-31T14:51:54.530Z',
      progress: 19.5,
      dependencies: 't1',
    },
  ];

  // Using AfterViewInit to ensure the view (and thus the ElementRef) is initialized
  ngAfterViewInit(): void {
    this.initializeGantt();
  }

  initializeGantt(): void {
    // Ensure ganttEl is initialized (it will be thanks to the non-null assertion operator)
    this.gantt = new Gantt(this.ganttEl.nativeElement, this.tasks, {
      on_click: function (task) {
        console.log(task);
      },
      on_date_change: function (task, start, end) {
        console.log(task, start, end);
      },
      on_progress_change: function (task, progress) {
        console.log(task, progress);
      },
      on_view_change: function (mode) {
        console.log(mode);
      },
      view_mode: 'Quarter Day',
      language: 'en',
    });
  }
}
