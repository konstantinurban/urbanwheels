import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { IndexSectionComponent } from './body/index-section/index-section.component';
import { AboutSectionComponent } from './body/about-section/about-section.component';
import { GallerySectionComponent } from './body/gallery-section/gallery-section.component';
import { ToursSectionComponent } from './body/tours-section/tours-section.component';
import { ContactSectionComponent } from './body/contact-section/contact-section.component';
import { BurgerComponent } from './header/burger/burger.component';
import { TourCarouselItemDirective } from './_directives/tour-carousel-item.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    IndexSectionComponent,
    AboutSectionComponent,
    GallerySectionComponent,
    ToursSectionComponent,
    ContactSectionComponent,
    BurgerComponent,
    TourCarouselItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
