# FrameworkDesign

This is a small project made to demonstrate the usage of the ngrx store and reducer.
The application is simulating sending out two messages: Fizz and Buzz. Whenever the user clicks a button, an Action is emitted. (src/app/fizzbuzz.action.ts)

This action is then handled by the reducer (src/app/reducer.action.ts) which updates the State provided by ngrx.

Since the Store is connected to the component (src/app/my-fizbuzz/my-fizzbuzz.component.ts) via the constructor, and we have an Observable string (count$) that listens to the current state of store, it is updated and the newly composed value is refreshed in the html.

In order to check the app out, enter

https://stackblitz.com/edit/angular-ivy-hvuqfy?embed=1&file=src/app/app.component.ts

then add the @ngrx/store dependency:


![image](https://user-images.githubusercontent.com/38786556/169394237-b57c83fa-dfed-4918-af0d-27d6771ac372.png)



# About ngrx:

https://ngrx.io/

Store is RxJS powered global state management for Angular applications, inspired by Redux. Store is a controlled state container designed to help write performant, consistent applications on top of Angular.

