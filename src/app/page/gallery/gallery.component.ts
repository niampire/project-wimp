import { Component, OnInit } from '@angular/core';
import { RequestService } from './image/request.service';
import { ImageComponent } from './image/image.component';
import { Info } from './info';
  import {HttpClient} from '@angular/common/http';
  import { MapComponent } from './map/map.component';


  @Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css'],
    providers: [RequestService]
  })
  export class GalleryComponent implements OnInit {
    // requests = this.requestService.getUsers();

    constructor(private data: RequestService) {}

    ngOnInit() {}

    // userName: string = "";
    // userPhoto: string = "";
    // response: any;
    // request:  [];
    // users: Object;
    // resolving: String;


    // info: Info;
    // requests = [
    //   // {name: 'name 1'},
    //   // {name: 'name 2'},
    //   // {name: 'name 3'},
    //   // {name: 'name 4'},
    //   // {name: 'name 5'},
    //   // {name: 'name 6'},
    // ];


    // constructor(private data: RequestService) {}

    // ngOnInit() {
    //   this.data.getUsers().subscribe(data => {
    //     //this.response = response;
    //     this.users = data
    //     //console.log(this.response);
    //     console.log(this.users.data);

    //     this.resolving = '112317'

      // this.requestService.getUsers().subscribe(data => this.info=data["name"])
        // console.log(request);
    // this.requestService.getUsers().subscribe((data:Info) => this.info=data);

    // });

  //   this.requests =this.requestService.requests


    // this.requestService.getUsers().subscribe( next: users => {
    //   // this.request = request
    //   console.log(request);
    // });
  }



