import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  emps = [
    {"id": 1, "name": "test1"},
    {"id": 2, "name": "test2"},
    {"id": 3, "name": "test3"},
    {"id": 4, "name": "test4"},
    {"id": 5, "name": "test5"},
    {"id": 6, "name": "test6"}
  ];

  constructor() { }

  getAllEmps() {
    return this.emps;
  }

}
