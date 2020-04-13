import { Component, OnInit, AfterViewInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { imgArray } from './gallery-data.json';
import { ContentfulService } from '../../_services/contentful.service';
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
  imageArray: any[] = [];
  galleryImages: Entry<any>[] = [];


  constructor(
    private contentfulService: ContentfulService
  ) {
    this.imageArray = imgArray;
  }

  ngOnInit() {
    this.contentfulService.getGalleryImages()
      .then(images => this.galleryImages = images)
      .then(images => console.log(this.galleryImages));
    imagesLoaded(document.querySelector('.gallery-section'), function(instance) {
      console.log('Images loaded > swiper start');
      var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 5,
        slidesPerView: 3,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var galleryText = new Swiper('.gallery-text', {
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
      var galleryMain = new Swiper('.gallery-main', {
        spaceBetween: 5,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        thumbs: {
          swiper: galleryThumbs
        }
      });
      galleryText.controller.control = galleryMain;
      galleryMain.controller.control = galleryText;
    });
  }
}
