import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.css']
})
export class ButtonListComponent implements OnInit {
  @Input() buttons: string[] = []
  @Output() clickIcon = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  getClickButtonNumber(buttonNumber:number){
    this.clickIcon.emit(buttonNumber);
  }

}
