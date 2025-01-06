import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationModel } from '../app/models/registration-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:3000/registrations';

  constructor(private http: HttpClient) { }

  getRegistrations(): Observable<RegistrationModel[]> {
    return this.http.get<RegistrationModel[]>(this.url);
  }

  addRegistration(reg: RegistrationModel): Observable<RegistrationModel> {
    return this.http.post<RegistrationModel>(this.url, reg);
  }

  modifyRegistration(reg: RegistrationModel): Observable<RegistrationModel> {
    return this.http.put<RegistrationModel>(`${this.url}/${reg.id}`, reg);
  }

  deleteRegistration(reg: RegistrationModel): Observable<RegistrationModel> {
    return this.http.delete<RegistrationModel>(`${this.url}/${reg.id}`);
  }



}
