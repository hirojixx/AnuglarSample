import { NavigationServiceService } from 'src/app/service/navigation-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  buttons = ['Icon1', 'Icon2', 'Icon3', 'Icon4', 'Icon5'];

  constructor(private navigationServiceService:NavigationServiceService) { }

  ngOnInit(): void {
    this.navigationServiceService.setButtons(this.buttons);
  }

}
