import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  table: HTMLTableElement;
  form: FormGroup;
  matrixWidth: number;
  matrixHeight: number;
  matrix: any[];
  matrixIsBuilt = false;
  result = 0;
  history = [];

  constructor() {
  }

  ngOnInit(): void {
    this.table = document.querySelector('.matrix__table');
    this.form = new FormGroup({
      'matrixWidth': new FormControl(0, [Validators.required, Validators.min(1), Validators.max(10)]),
      'matrixHeight': new FormControl(0, [Validators.required, Validators.min(1), Validators.max(10)]),
    });

    this.result = 5;
  }

  buildMatrix(): void {
    this.matrixIsBuilt = true;
    // let content = 0;
    const array = [];
    for (let i = 0; i < this.matrixHeight; i++) {
      const temp = new Array();
      for (let j = 0; j < this.matrixWidth; j++) {
        temp.push('0');
        // temp.push(content);
        // content++;
      }
      array.push(temp);
    }
    this.matrix = [...array];
    this.buildTable();


    // del
    console.log(this.matrix);
  }

  buildTable(): void {
    // let counter = 0;
    for (let x = 0; x < this.matrixHeight; x++) {
      const tr = document.createElement('tr');
      for (let y = 0; y < this.matrixWidth; y++) {
        const td = document.createElement('td');
        td.addEventListener('click', (event) => {
          const target = event.target as HTMLTableDataCellElement;
          const x = target.cellIndex;

          // @ts-ignore
          const y = target.parentNode.rowIndex;
          if (target.innerText == "0") {
            this.matrix[y][x] = '1';
            target.style.backgroundColor = '#79d479';
            target.innerText = '1';
          } else {
            this.matrix[y][x] = '0';
            target.style.backgroundColor = '#e1e1e1';
            target.innerText = '0';
          }
          console.log(this.matrix);
        });
        td.innerText = '0';
        // td.innerText = counter.toString();
        tr.appendChild(td);
        // counter++;
      }
      this.table.appendChild(tr);
    }
  }

  drawMatrix(): void {
    this.table.innerHTML = '';
    this.matrixWidth = this.form.get('matrixWidth').value;
    this.matrixHeight = this.form.get('matrixHeight').value;
    this.buildMatrix();
  };

  checkMatrix() {
    const currentMatrix = {
      matrix: this.matrix,
      width: this.matrixWidth,
      height: this.matrixHeight
    };
    this.history.push(currentMatrix);
  };

  restoreMatrix(i) {
    // const restoredMatrix
  }
}
