import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { ContentfulService } from '../../_services/contentful.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';
declare let Swiper: any;
declare let $: any;
declare let imagesLoaded: any;

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.scss']
})
export class GallerySectionComponent implements OnInit {
  @HostBinding('class') class = 'app-gallery-section';
  galleryImages: Entry<any>[] = [];
  swiperShown: boolean;
  galleryLoaded: boolean;
  viewPage: boolean = false;

  constructor(
    private contentfulService: ContentfulService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.galleryImages = this.activatedRoute.snapshot.data.galleryImages;
  }

  ngAfterViewInit() {
    var galleryText = new Swiper('.gallery-text', {
      slidesPerView: 1,
      effect: 'fade',
      autoHeight: true,
      speed: 300,
      loop: true,
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is => 799
        799: {
          speed: 700
        }
      }
    });
    var galleryMain = new Swiper('.gallery-main', {
      speed: 10000,
      direction: 'horizontal',
      spaceBetween: 0,
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
    if (window.outerWidth < 800) {
      this.swiperShown = true;
      setTimeout(() => {
        this.swiperShown = false;
      }, 2000);
    }
  }


  imageLoaded() {
    this.viewPage = true;
    $('.component-loader').hide();
  }
}
