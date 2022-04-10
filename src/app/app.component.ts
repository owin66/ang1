import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamick title'
  number = 42;
  arr = [1,2,3,4]
  obj = {a:1,b:{c:1}}
}
