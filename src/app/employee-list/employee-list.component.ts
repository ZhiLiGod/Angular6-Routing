import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h3>
      Employee List
    </h3>
    <ul class="items">
      <li *ngFor="let emp of emps">
        <span class="badge">{{ emp.id }}</span>{{ emp.name }}
      </li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  emps

  constructor(private empService: EmpServiceService) { }

  ngOnInit() {
    this.emps = this.empService.getAllEmps();
  }

}
