import { Component, OnInit } from '@angular/core';
// import { }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //   src="https://telegram.org/js/telegram-widget.js?5" data-telegram-login="samplebot" data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"

  // function onTelegramAuth(user) {
  //   alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
  // }


  }

}
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';

// import { UserService } from './services/user.service';
// import { Errors } from '../shared';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   authType: String = '';
//   title: String = '';
//   errors: Errors = new Errors();
//   isSubmitting = false;
//   authForm: FormGroup;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private userService: UserService,
//     private fb: FormBuilder
//   ) {
//     // use FormBuilder to create a form group
//     this.authForm = this.fb.group({
//       'email': ['', Validators.required],
//       'password': ['', Validators.required]
//     });
//   }

//   ngOnInit() {
//     this.route.url.subscribe(data => {
//       // Get the last piece of the URL (it's either 'login' or 'register')
//       this.authType = data[data.length - 1].path;
//       // Set a title for the page accordingly
//       this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
//       // add form control for username if this is the register page
//       if (this.authType === 'register') {
//         this.authForm.addControl('username', new FormControl());
//       }
//     });
//   }

//   submitForm() {
//     this.isSubmitting = true;
//     this.errors = new Errors();

//     const credentials = this.authForm.value;
//     this.userService
//     .attemptAuth(this.authType, credentials)
//     .subscribe(
//       data => this.router.navigateByUrl('/'),
//       err => {
//         this.errors = err;
//         this.isSubmitting = false;
//       }
//     );
//   }
// }
