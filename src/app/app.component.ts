import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cur1: number = 0.25;
  cur2: number = 10.266782;
  locale = 'fi'
  constructor() {

  }

  setLocale() {
    this.locale = (this.locale === 'fi') ? 'en-US' : 'fi';

    console.log(this.locale);
  }
}

/*import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  cur1: number = 0.25;
  cur2: number = 10.266782;
  locale = 'fi'
  constructor() {

  }

  setLocale() {
    this.locale = (this.locale === 'fi') ? 'en-US' : 'fi';

    console.log(this.locale);
  }
}
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/