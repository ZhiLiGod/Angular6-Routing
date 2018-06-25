import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
      You selected department with id = {{ departmentId }}
    </h3>
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <a (click)="goPrev()">Previous</a>
    <a (click)="goNext()">Next</a>
    <div>
      <button (click)="gotoDepartment()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  departmentId;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));

    // this.departmentId = id;

    this.route
      .paramMap
      .subscribe((params: ParamMap) => {
        let id = parseInt(params.get('id'));
        this.departmentId = id;
      });
  }

  goPrev() {
    let prevId = this.departmentId - 1;
    // this.router.navigate(['/departments', prevId]);
    this.router.navigate([prevId], {relativeTo: this.route});
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate([nextId], {relativeTo: this.route});
  }

  gotoDepartment() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}
