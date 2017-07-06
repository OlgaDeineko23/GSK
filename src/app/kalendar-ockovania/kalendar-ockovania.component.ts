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
  year0: any;
  year1: any;
  year2: any;
  year3: any;
  year4: any;
  selectedValue: number;
  yeaControl: FormControl;

  constructor() {
    this.years = [];
    this.yeaControl = new FormControl('');
  }

  ngOnInit() {
    this.fullyear = new Date().getFullYear();
    var range = [];


    for (var i = 0; i <= 67; i++) {
      range.unshift(this.fullyear - i);
    }

    this.years = range;
    this.year0 = this.selectedValue;
    this.year1 = this.selectedValue + 1;
    this.year2 = this.selectedValue + 6;
    this.year3 = this.selectedValue + 11;
    this.year4 = this.selectedValue + 16;

  }

  onSubmit(value):void {
    console.log(value);
  }
}
