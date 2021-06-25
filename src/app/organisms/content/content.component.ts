import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationServiceService } from 'src/app/service/navigation-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  clickButton: number| undefined
  subscription = new Subscription();


  constructor(private navigationServiceService:NavigationServiceService) { }

  ngOnInit(): void {
    this.subscription = this.navigationServiceService.selectedButtons.subscribe(buttonNumber => {
      this.clickButton = buttonNumber;
      console.log(`buttonclicked: ${buttonNumber}`);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
