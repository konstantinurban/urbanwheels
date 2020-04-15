import { Component, OnInit, AfterViewInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { imgArray } from './gallery-data.json';
import { ContentfulService } from '../../_services/contentful.service';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';
declare let Swiper: any;
declare let imagesLoaded: any;

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GallerySectionComponent implements OnInit {
  @HostBinding('class') class = 'app-gallery-section';
  galleryImages: Entry<any>[] = [];
  swiperShown: boolean;

  constructor(
    private contentfulService: ContentfulService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.galleryImages = this.activatedRoute.snapshot.data.galleryImages;
    if (window.outerWidth < 800) {
      this.swiperShown = true;
      setTimeout(() => {
        this.swiperShown = false;
      }, 2000);
    }
  }

  ngAfterViewInit() {
    var galleryText = new Swiper('.gallery-text', {
      slidesPerView: 1,
      effect: 'fade',
      autoHeight: true,
      loop: true,
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
    var galleryMain = new Swiper('.gallery-main', {
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      autoHeight: true,
      breakpoints: {
        // when window width is => 799
        799: {
          autoHeight: false
        }
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      }
    });
    galleryText.controller.control = galleryMain;
    galleryMain.controller.control = galleryText;
  }
}
