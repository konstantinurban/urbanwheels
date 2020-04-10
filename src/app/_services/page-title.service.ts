import { Injectable } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  getPageTitle: string;
  constructor(
    private location: Location,
    private router: Router
  ) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.getPageTitle = e.url;
        this.getPageTitle = this.getPageTitle.substr(1);
        this.getPageTitle = this.getPageTitle.charAt(0).toUpperCase() + this.getPageTitle.slice(1);
        this.getPageTitle = this.getPageTitle;
      }
    });
  }
}
