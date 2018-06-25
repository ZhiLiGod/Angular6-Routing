import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  private url = 'http://localhost:5000/debtor';
  private emps = [
    {"id": 1, "name": "test1"},
    {"id": 2, "name": "test2"},
    {"id": 3, "name": "test3"},
    {"id": 4, "name": "test4"},
    {"id": 5, "name": "test5"},
    {"id": 6, "name": "test6"}
  ];

  constructor(private http: HttpClient) { }

  getAllEmps(): Observable<IEmployee[]> {
    //return this.emps;
    return this.http.get<IEmployee[]>(this.url);
  }

}
