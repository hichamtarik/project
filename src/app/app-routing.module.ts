import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { GradeAddComponent } from './components/parametrage/grades/grade-add/grade-add.component';
import { GradeEditComponent } from './components/parametrage/grades/grade-edit/grade-edit.component';
import { GradeIndexComponent } from './components/parametrage/grades/grade-index/grade-index.component';
import { LoginIndexComponent } from './components/parametrage/login/login-index/login-index.component';
import { LoginAddComponent } from './components/parametrage/login/login-add/login-add.component';
import { LoginEditComponent } from './components/parametrage/login/login-edit/login-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
    // **************************  grades *******************/
    { path: 'grades', component: GradeIndexComponent},
    { path: 'grades/create', component: GradeAddComponent},
    { path: 'grades/:id', component: GradeEditComponent},
    // **************************  login *******************/
    { path: 'login', component: LoginIndexComponent},
    { path: 'login/create', component: LoginAddComponent},
    { path: 'login/:id', component: LoginEditComponent},
    // **************************  errors *******************/
  { path: '**', component: ErrorComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
