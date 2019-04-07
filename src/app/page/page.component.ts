import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page = {
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.',
    image: 'https://finding-rover-inc-res.cloudinary.com/image/upload/v1535143454/website_assets/placeholdcamdog.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}
