import { createReducer, on } from '@ngrx/store';
import { fizz, buzz, reset } from './fizzbuzz.action';

export const initialState = "";

export const fizzbuzzReducer = createReducer(
  initialState,
  on(fizz, (state) => state + "Fizz"),
  on(buzz, (state) => state + "Buzz"),
  on(reset, (state) => "")
);