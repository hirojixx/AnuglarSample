import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  buttons: string[] = ['Icon1', 'Icon2', 'Icon3', 'Icon4', 'Icon5']

  constructor() { }

  ngOnInit(): void {
  }

}
