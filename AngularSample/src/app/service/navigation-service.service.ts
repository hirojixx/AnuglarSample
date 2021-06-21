import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {
  initButtons: string[] = ['Icon1', 'Icon2', 'Icon3', 'Icon4', 'Icon5']
  selectedButtons = new Subject<number>();

  constructor() { }

  getButtons(): Observable<string[]>{
    const buttons = of(this.initButtons);
    return buttons
  }

  emitButtons(buttons: string){
    const buttonNumber = parseInt(buttons.substring(4));
    console.log('emited');
    this.selectedButtons.next(buttonNumber);
  }
}
