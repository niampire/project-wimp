import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Pipe } from '@angular/core';

  @Injectable()
  export class RequestService {
  constructor(private http: HttpClient){
  }
  // // private requestUrl = 'https://api.randomuser.me/?inc=gender,name,picture,location&results=8&nat=gb';
  // private requestUrl = 'https://api.github.com/users';
  // private requestUrl = 'https://reqres.in/api/users';
  private requestUrl = 'http://geek-med.tk:3030/api/v1/requests/list?r=10000&d=30&lon=32.09&lat=49.43';
  // private requestUrl = 'http://ec2-3-122-245-231.eu-central-1.compute.amazonaws.com:3030/api/v1/requests/list?r=10000&d=30&lon=32.09&lat=49.43';
    getUsers() {
      return this.http.get(this.requestUrl);
    }
  }

