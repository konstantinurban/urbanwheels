import { Component, OnInit, AfterViewInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { ContentfulService } from '../../_services/contentful.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Entry } from 'contentful';
declare let Swiper: any;
declare let $: any;
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
  galleryLoaded: boolean;

  constructor(
    private contentfulService: ContentfulService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.galleryImages = this.activatedRoute.snapshot.data.galleryImages;
  }

  ngAfterViewInit() {
    let section = $('.gallery-section');
    let loader = $('.pre-gallery');
    section.hide();
    loader.css({ 'position' : 'fixed', 'top': '50%', 'z-index' : 100});
    imagesLoaded(section, function(instance) {
      loader.hide();
      section.show();
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
    });
    if (window.outerWidth < 800) {
      this.swiperShown = true;
      setTimeout(() => {
        this.swiperShown = false;
      }, 2000);
    }
  }
}
