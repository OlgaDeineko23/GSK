import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kalendar-ockovania',
  templateUrl: './kalendar-ockovania.component.html',
  styleUrls: ['kalendar-ockovania.component.scss']
})
export class KalendarOckovaniaComponent implements OnInit {
  years: any = [];
  fullyear:any;

  constructor() {
    this.years = [];
  }

  ngOnInit() {
    this.fullyear = new Date().getFullYear();
    var range = [];


    for (var i = 0; i <= 67; i++) {
      range.unshift(this.fullyear - i);
    }

    this.years = range;
  }

}
