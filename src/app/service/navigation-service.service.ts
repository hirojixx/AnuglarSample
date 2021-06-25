import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {
  buttons: string[] = []
  selectedButtons = new Subject<number>();

  constructor() { }

  setButtons(buttons:string[]){
    this.buttons = buttons;
  }

  getButtons(){
    return of(this.buttons);
  }

  emitButtons(buttons: string){
    const buttonNumber = parseInt(buttons.substring(4));
    console.log('emited');
    this.selectedButtons.next(buttonNumber);
  }
}
