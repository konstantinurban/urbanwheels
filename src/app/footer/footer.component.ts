import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';
import { PageTitleService } from '../_services/page-title.service';
import { Router, RouterModule, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  pageTitle: string;
  isGallery: boolean = false;

  constructor(
    public menu: MenuService,
    public page: PageTitleService,
    public router: Router
  ) {
    this.pageTitle = this.page.getPageTitle;
  }
  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (e.url == '/gallery') {
        console.log(e.url);
          this.isGallery = true;
        } else {
          this.isGallery = false;
        }
      }
    });
    // console.log(this.router.url);
    // console.log(this.page.getPageTitle);
    // if (this.pageTitle = 'gallery') {
    //   console.log(this.pageTitle);
    //   this.isGallery = true;
    // } else {
    //   this.isGallery = false;
    // }
  }
}
