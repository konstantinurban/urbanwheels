import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { PageTitleService } from '../../_services/page-title.service';
import { ContentfulService } from '../../_services/contentful.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  @HostBinding('class') class = 'app-about-section';
  pageTitle: string;
  aboutImageUrl: any;
  aboutImageAlt: any;

  constructor(
    public page: PageTitleService,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    this.pageTitle = this.page.getPageTitle;
    this.contentfulService.getAboutImage()
      .then((asset) => {
        this.aboutImageUrl = asset.file.url;
        this.aboutImageAlt = asset.description;
      });
  }
}
