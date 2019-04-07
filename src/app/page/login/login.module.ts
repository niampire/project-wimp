// import { ModuleWithProviders, NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

// import { LoginComponent } from './login.component';
// import { NoAuthGuard } from './no-auth-guard.service';
// import { SharedModule } from '../shared';

// const authRouting: ModuleWithProviders = RouterModule.forChild([
//   {
//     path: 'login',
//     component: LoginComponent,
//     canActivate: [NoAuthGuard]
//   },
//   {
//     path: 'register',
//     component: LoginComponent,
//     canActivate: [NoAuthGuard]
//   }
// ]);

// @NgModule({
//   imports: [
//     authRouting,
//     SharedModule
//   ],
//   declarations: [
//     LoginComponent
//   ],

//   providers: [
//     NoAuthGuard
//   ]
// })
// export class AuthModule {}
