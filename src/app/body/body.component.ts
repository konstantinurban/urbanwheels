import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';
import { routerTransition } from '../_animations/route-animation';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [routerTransition]
})
export class BodyComponent {

  constructor(
    private menu: MenuService
  ) { }

  ngOnInit() {
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
