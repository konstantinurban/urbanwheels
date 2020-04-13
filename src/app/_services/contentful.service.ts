import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

/* The next step is to set up a config object which holds the needed
information to retrieve data from the Contentful API.
To use the Contentful API you need to define the id and access
token of the space you want to fetch data from. */

const CONFIG = {
  space: 'bdt0tjkmo3m1',
  // Below: Content Preview API Access Token -> can get published and draft
  accessToken: '7p3DHxaf4P25c-B8X_ENiKK0NK2REserffW2e8oCoRg',

  contentTypeIds: {
    /*
    Get it from the Content Type ID from JSON Preview:
    1. Go to https://app.contentful.com
    2. Select your Space and go to Content Types
    3. Select your Content Type
    4. Click on JSON Preview
    5. Find the top-level "sys" block in the JSON, this includes the Meta-Data of your Content Type
    6. The "id" key inside the "sys" block will contain your Content Type ID
    */
    gallery: 'gallery'

  },

  assetIds: {
    contact: '6o9uhnjboNsXHjb7cQRVAN',
    tours: 'foCZZC8M5UNUDPYZZG8fU',
    about: '7wRLEZPSiWweKfhNnkzFqV'
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  })

  constructor() { }

  //get Page Image
  getPageImage(page: string) {
    switch (page) {
      case 'contact':
        return this.cdaClient.getAsset(CONFIG.assetIds.contact)
          .then((asset) => asset.fields);
        break;
      case 'about':
        return this.cdaClient.getAsset(CONFIG.assetIds.about)
          .then((asset) => asset.fields);
      case 'tours':
        return this.cdaClient.getAsset(CONFIG.assetIds.tours)
          .then((asset) => asset.fields);
    }
  }

  //get Gallery Images
  getGalleryImages(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      // include : 2,
      content_type: CONFIG.contentTypeIds.gallery
    }, query))
      .then(res => res.items);
  }
}
