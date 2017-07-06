import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-kalendar-ockovania',
  templateUrl: './kalendar-ockovania.component.html',
  styleUrls: ['kalendar-ockovania.component.scss']
})
export class KalendarOckovaniaComponent implements OnInit {
  years: any = [];
  fullyear: any;
  selectedValue: number;
  yeaControl: FormControl;

  constructor() {
    this.years = [];
    this.yeaControl = new FormControl('');
  }

  ngOnInit() {
    this.fullyear = new Date().getFullYear();
    var range = [];


    for (var i = 1950; i <= this.fullyear; i++) {
      range.push(i);
    }

    this.years = range;

  }

  onSubmit(value):void {
    console.log(value);
  }
}
