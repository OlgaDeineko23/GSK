import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-kalendar-ockovania',
  templateUrl: './kalendar-ockovania.component.html',
  styleUrls: ['kalendar-ockovania.component.scss']
})
export class KalendarOckovaniaComponent implements OnInit {
  years: number[];
  fullYear: number;
  circleYear: number;
  yearControl: FormControl;

  constructor() {
    this.years = [];
    this.yearControl = new FormControl('');
  }

  ngOnInit() {
    this.fullYear = new Date().getFullYear();
    var range = [];


    for (var i = 0; i <= 67; i++) {
      range.unshift(this.fullYear - i);
    }

    this.years = range;
  }

  toNumber() {
    this.circleYear = +this.yearControl.value;
  }
}
