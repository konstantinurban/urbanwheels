import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
  isIndex: boolean;

  constructor(
    public menu: MenuService,
    public router: Router
  ) {
    new WOW().init();
  }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (e.url == '/') {
          this.isIndex = true;
        } else {
          this.isIndex = false;
        }
      }
    });
  }

  closeMenu() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1000) {
      this.menu.isMenuClosed = false;
      this.menu.isBurgerClosed = false;
    }
  }
}
