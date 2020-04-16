import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PageTitleService } from '../../_services/page-title.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tours-section',
  templateUrl: './tours-section.component.html',
  styleUrls: ['./tours-section.component.scss']
})
export class ToursSectionComponent implements OnInit {
  pageTitle: string;
  toursImageUrl: any;
  toursImageAlt: any;
  viewPage : boolean = false;

  constructor(
    public page: PageTitleService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.pageTitle = this.page.getPageTitle;
    this.toursImageAlt = this.activatedRoute.snapshot.data.pageImage.description;
    this.toursImageUrl = this.activatedRoute.snapshot.data.pageImage.file.url;
  }

  imageLoaded() {
    this.viewPage = true;
  }
}
