import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-circular-progress',
  templateUrl: 'ngx-circular-progress.component.html',
  styleUrls: ['ngx-circular-progress.component.scss']
})
export class NgxCircularProgressComponent implements OnInit {
  @Input('value') percent: number = 25;
  @Input('color') color: string = "blue";
  @Input('txtColor') txtColor: string = "black";
  
  bln: boolean = false;
  degree: number;
  degStr: string;

  constructor() { }

  ngOnInit(): void {
    this.degree = this.percent * 3.6;
    this.bln = this.percent > 50;
    this.degStr = `rotate(${this.degree}deg)`;
  }

}
