import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public menu: MenuService
  ) { }

  ngOnInit() {
  }

}
