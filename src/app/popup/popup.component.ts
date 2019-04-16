import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let delay_popup = 5000;
    setTimeout("document.getElementById('bg_popup').style.display='block'", delay_popup);

  }

}
