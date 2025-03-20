import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);

  login(obj: user){
    return this.http.post<APIRESPONSE>("https://projectapi.gerasim.in/api/IncidentTracking/login", obj);
  }
}

export interface APIRESPONSE{
  message: string;
  result: boolean;
  data: any;
}