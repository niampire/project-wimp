import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit{

  // constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {}
//   SERVER_URL = 'https://server.url';

//   requestForm = new FormGroup({
//     firstName: new FormControl(),
//     lastName: new FormControl
//   });

//   sendRequestFrom(){
//     console.log('hello');

//   }

today: Date;

ngOnInit() {
  this.today = new Date();
}

  }

