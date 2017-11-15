import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
      test works!
    </p>
  `,
  styleUrls: ['./test.component.styl']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
