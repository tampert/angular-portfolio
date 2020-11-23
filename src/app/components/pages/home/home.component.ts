import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  geboren:Date = new Date('10/20/1978');
  nu:Date = new Date();
  dif:number = this.nu.getTime() - this.geboren.getTime();
  difdays:number = this.dif/(1000 * 3600 * 24);
  difYears:number = Math.floor(this.difdays/365);

  constructor() { }

  ngOnInit(): void {
  }

}
