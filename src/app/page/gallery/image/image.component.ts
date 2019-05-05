import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from './request.service';
import { DateconverterService } from './dateconverter.service';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  providers: [RequestService, DateconverterService]
})
export class ImageComponent implements OnInit {

  // @Input() RequestService;
  // constructor() { }

  // ngOnInit() {
  // }
    // requests = this.requestService.getUsers();
    userName: string = "";
    userPhoto: string = "";
    response: any;
    request:  [];
    requests: Object;
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
    constructor(private data: RequestService) {}

    ngOnInit() {
      this.data.getUsers().subscribe(data => {

        this.response = data;
        this.requests = this.response.requests;

        console.log(this.requests);

        // const myDate = new Date();
        // myDate.setTime(this.request);

 });
 }
  }
