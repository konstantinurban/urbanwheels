import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, style, group, query, transition } from '@angular/animations';
import * as Player from '@vimeo/player';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
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
export class IndexComponent implements OnInit {

  hideLogo = false;
  innerWidth: any;
  isMobile = false;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 800) {
      this.isMobile = true;
    }

    var iframe = document.querySelector('iframe');
    var player = new Player(iframe);

    player.on('play', () => {
      console.log(this.isMobile);
      if (this.isMobile) {
        this.hideLogo = true;
      }
      console.log('played');
    });

    player.on('ended', () => {
      if (this.isMobile) {
        this.hideLogo = false;
      }
    });
  }
}
