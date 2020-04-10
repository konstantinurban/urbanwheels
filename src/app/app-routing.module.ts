import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutSectionComponent } from './body/about-section/about-section.component';
import { ToursSectionComponent } from './body/tours-section/tours-section.component';
import { GallerySectionComponent } from './body/gallery-section/gallery-section.component';
import { ContactSectionComponent } from './body/contact-section/contact-section.component';
import { IndexSectionComponent } from './body/index-section/index-section.component';

export const routes: Routes = [
  { path: '', component: IndexSectionComponent},
  { path: 'about', component: AboutSectionComponent, data: {state: 'about'}},
  { path: 'tours', component: ToursSectionComponent, data: {state: 'tours'}},
  { path: 'gallery', component: GallerySectionComponent, data: {state: 'gallery'}},
  { path: 'contact', component: ContactSectionComponent, data: {state: 'contact'}},
  { path: 'index', component: IndexSectionComponent, data: {state: 'home'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
