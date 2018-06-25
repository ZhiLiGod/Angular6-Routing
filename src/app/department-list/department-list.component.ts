import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      department List
    </h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span>{{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  seelctedId

  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "Java"},
    {"id": 4, "name": "C#"},
    {"id": 5, "name": "C++"},
    {"id": 6, "name": "Bootstrap"},
  ];

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.seelctedId = id;
    });
  }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
  }

  isSelected(department) {
    return department.id === this.seelctedId;
  }

}
