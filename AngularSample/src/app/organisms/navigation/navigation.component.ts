import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() buttons:string[] = []
  @Output() clickIcon = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  getClickButtonNumber(buttonNumber:number){
    this.clickIcon.emit(buttonNumber);
  }

}
