import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public isMenuClosed: boolean = false;
  public isBurgerClosed: boolean;
}
