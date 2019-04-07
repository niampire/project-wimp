import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  someString: FormControl;

  constructor() { }

  ngOnInit() {
    this.someString = new FormControl('hello');
  }

  resetToHello() {
    this.someString.patchValue('hello');
  }
}
