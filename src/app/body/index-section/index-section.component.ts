import { Component, OnInit, HostBinding, AfterViewInit } from '@angular/core';
import { trigger, state, animate, style, group, query, transition } from '@angular/animations';
import Vimeo from '@vimeo/player';
declare let WOW: any;

@Component({
  selector: 'app-index-section',
  templateUrl: './index-section.component.html',
  styleUrls: ['./index-section.component.scss'],
  animations: [
    trigger('logoFade', [
      state('initial', style({
        opacity: 1
      })),
      state('end', style({
        opacity: 0
      })),
      transition('initial <=> end', [animate('.5s')])
    ])
  ]
})
export class IndexSectionComponent implements OnInit {
  @HostBinding('class') class = 'app-index-section';
  hideLogo = false;
  innerWidth: any;
  isMobile = false;

  constructor() {
    new WOW().init();
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 800) {
      this.isMobile = true;
    }
    setInterval(() => {
      if (this.isMobile) {
        this.hideLogo = true;
      }
    }, 3000);
  }

  ngAfterViewInit() {
    var iframe = document.querySelector('iframe');
    var player = new Vimeo(iframe);
    player.on('finished', () => {
      if (this.isMobile) {
        alert("vid endd");
        this.hideLogo = false;
      }
    });
  }
}
