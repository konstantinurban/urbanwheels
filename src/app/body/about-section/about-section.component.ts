import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { PageTitleService } from '../../_services/page-title.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  @HostBinding('class') class = 'app-about-section';
  pageTitle: string;
  constructor(
    public page: PageTitleService
  ) { }

  ngOnInit() {
    this.pageTitle = this.page.getPageTitle;
  }
}
