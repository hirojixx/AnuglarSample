import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttons: string[] = []
  @Output() clickIcon = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(button:string){
    const clickNumber = parseInt(button.substring(4));
    this.clickIcon.emit(clickNumber);
  }

}
