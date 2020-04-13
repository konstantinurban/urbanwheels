import { ContentfulService } from './contentful.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageImageResolverService implements Resolve<any> {
  imagesRaw: any;

  constructor(
    private contentfulService: ContentfulService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.contentfulService.getPageImage(route.data['state']);
  }
}
