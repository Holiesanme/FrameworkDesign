import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
 
import { StoreModule } from '@ngrx/store';
import { fizzbuzzReducer } from './fizzbuzz.reducer';
import { FizzBuzzComponent } from './my-fizbuzz/my-fizzbuzz.component';
 
@NgModule({
  declarations: [AppComponent, FizzBuzzComponent],
  imports: [BrowserModule, StoreModule.forRoot({ fizzbuzz: fizzbuzzReducer})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}