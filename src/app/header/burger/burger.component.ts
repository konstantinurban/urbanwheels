import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../_services/menu.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {

  constructor(
    public menu: MenuService
  ) { }

  ngOnInit() {
  }
  onBurgerClicked() {
    this.menu.isBurgerClosed = !this.menu.isBurgerClosed;
    this.menu.isMenuClosed = !this.menu.isMenuClosed;
  }
}
