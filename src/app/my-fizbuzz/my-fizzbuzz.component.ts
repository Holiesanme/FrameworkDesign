import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fizz, buzz, reset } from '../fizzbuzz.action';
 
@Component({
  selector: 'my-fizzbuzz',
  templateUrl: './my-fizzbuzz.component.html',
})
export class FizzBuzzComponent {
  count$: Observable<string>;
 
  constructor(private store: Store<{ fizzbuzz: string }>) {
    this.count$ = store.select('fizzbuzz');
  }
 
  fizz() {
    this.store.dispatch(fizz());
  }
 
  buzz() {
    this.store.dispatch(buzz());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}