import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PageTitleService } from '../../_services/page-title.service';
import { ContentfulService } from '../../_services/contentful.service';
declare let Swiper: any;
import { imgArray } from './tours-data.json';
declare let imagesLoaded: any;

@Component({
  selector: 'app-tours-section',
  templateUrl: './tours-section.component.html',
  styleUrls: ['./tours-section.component.scss']
})
export class ToursSectionComponent implements OnInit {
  pageTitle: string;
  pdfCovers: any[] = [];
  toursImageUrl: any;
  toursImageAlt: any;

  constructor(
    public page: PageTitleService,
    private contentfulService: ContentfulService
  ) {
    this.pdfCovers = imgArray;
  }

  ngOnInit() {
    this.contentfulService.getToursImage()
      .then((asset) => {
        this.toursImageUrl = asset.file.url;
        this.toursImageAlt = asset.description;
      });
    this.pageTitle = this.page.getPageTitle;
    imagesLoaded(document.querySelector('.tours-section'), function(instance) {
      var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        }
      });
    });
  }
}
