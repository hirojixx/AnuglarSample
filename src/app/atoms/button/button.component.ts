import { Component, OnInit } from '@angular/core';
import { NavigationServiceService } from 'src/app/service/navigation-service.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  buttons:string[] = []

  constructor(public navigationServiceService:NavigationServiceService) { }

  ngOnInit(): void {
  }

  buttonClick(button:string){
    this.navigationServiceService.emitButtons(button);
  }

}
