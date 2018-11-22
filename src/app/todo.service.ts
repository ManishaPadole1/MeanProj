import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private geturl = '/api';
  private posturl = '/api';

  constructor(private http: HttpClient) { }

  gettodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.geturl).pipe(map(res => res));
  }
  savetodos(todo):Observable<Todo[]>{
    return this.http.post<Todo[]>(this.posturl, todo).pipe(map(res => res));
  } 
  deletetodo(todoid){ 
    return this.http.delete(this.posturl + '/'+ todoid).pipe(map(res => res));
  }
  updatetodo(todoid){
    return this.http.put(this.posturl+ '/'+ todoid, todoid).pipe(map(res => res));
  }
}
