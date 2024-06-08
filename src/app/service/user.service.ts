import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlAPI = 'https://randomuser.me/api/';

  constructor(private http:HttpClient) { }

  public consultapersona(persona: string):Observable<any>{
    return this.http.get<any>(this.urlAPI+persona);
  }
}
