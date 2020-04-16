import { Component, OnInit, AfterViewInit, ViewEncapsulation, HostBinding, ChangeDetectorRef } from '@angular/core';
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
    private cd : ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.galleryImages = this.activatedRoute.snapshot.data.galleryImages;
  }

  ngAfterViewInit() {
    this.galleryLoaded = false;
    console.log("before load", this.galleryLoaded);
    let section = $('.gallery-section');
    section.hide();
    imagesLoaded(section, function(instance) {
      this.galleryLoaded = true;
      console.log("gal", this.galleryLoaded);
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
