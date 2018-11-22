import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { from } from 'rxjs';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [ TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
