import { Component, OnInit, HostListener } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MenuService } from '../_services/menu.service';
declare let WOW: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public innerWidth: any;
  pageTitle: string;
  constructor(
    public menu: MenuService,
  ) {
    new WOW().init();
  }

  ngOnInit() {}

  closeMenu() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1000) {
      this.menu.isMenuClosed = false;
      this.menu.isBurgerClosed = false;
    }
  }
}
