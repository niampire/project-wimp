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
  private requestUrl = 'https://reqres.in/api/users';
    getUsers() {
      return this.http.get(this.requestUrl);
    }
    // getUserAvatar(userId: number): string {
    //   return '/users/${userId}/avatar';
    // }

  }
  // requests = [
  //   {name: 'name 1'},
  //   {name: 'name 2'},
  //   {name: 'name 3'},
  //   {name: 'name 4'},
  //   {name: 'name 5'},
  //   {name: 'name 1'},
  // ];
// }


