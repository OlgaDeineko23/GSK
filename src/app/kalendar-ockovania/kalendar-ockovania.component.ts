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


    for (var i = 1950; i <= this.fullyear; i++) {
      range.push(i);
    }

    this.years = range;
  }

}
