import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @Input() buttons: string[] = []
  clickButton:number = 0

  constructor() { }

  ngOnInit(): void {
  }
  getClickButtonNumber(buttonNumber:number){
    this.clickButton = buttonNumber;
  }
}
