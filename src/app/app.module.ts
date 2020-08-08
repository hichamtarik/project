import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradeAddComponent } from './components/parametrage/grades/grade-add/grade-add.component';
import { GradeEditComponent } from './components/parametrage/grades/grade-edit/grade-edit.component';
import { GradeIndexComponent } from './components/parametrage/grades/grade-index/grade-index.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginIndexComponent } from './components/parametrage/login/login-index/login-index.component';
import { LoginAddComponent } from './components/parametrage/login/login-add/login-add.component';
import { LoginEditComponent } from './components/parametrage/login/login-edit/login-edit.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GradeAddComponent,
    GradeEditComponent,
    GradeIndexComponent,
    HomeComponent,
    ErrorComponent,
    LoginIndexComponent,
    LoginAddComponent,
    LoginEditComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
