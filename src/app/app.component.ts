import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'matrixWidth': new FormControl(1, [Validators.required, Validators.min(1), Validators.max(10)]),
      'matrixHeight': new FormControl(1, [Validators.required, Validators.min(1), Validators.max(10)]),
    });
  }

  // dell
  log(x) {console.log(x)};
}
