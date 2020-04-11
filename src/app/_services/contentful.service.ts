import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

/* The next step is to set up a config object which holds the needed
information to retrieve data from the Contentful API.
To use the Contentful API you need to define the id and access
token of the space you want to fetch data from. */

const CONFIG = {
  space: 'evr1lcaqkw3d',
  // Below: Content Preview API Access Token -> can get published and draft
  accessToken: 'k56jWElnvZq_9jyHRdP0xg6X0r0WbTT2Z-N-np51GSg',

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
    exhibit: 'exhibit'
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

}
