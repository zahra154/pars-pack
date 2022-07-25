import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {UsersModel} from "../models/users.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService ) {
  }

  getUsers(): Observable<Array<UsersModel>>{
    return this.apiService.getHandler(environment.api.mainUrl +'users');
  }

}
