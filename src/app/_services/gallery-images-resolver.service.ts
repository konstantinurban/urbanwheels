import { ContentfulService } from './contentful.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GalleryImagesResolverService implements Resolve<any> {
  
  constructor(
    private contentfulService: ContentfulService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.contentfulService.getGalleryImages();
  }
}
