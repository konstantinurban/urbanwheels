import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { PageTitleService } from '../../_services/page-title.service';
import { FormsubmitService } from '../../_services/formsubmit.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ContentfulService } from '../../_services/contentful.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  @HostBinding('class') class = 'app-contact-section';
  formShown: boolean = true;
  contactName: string;
  hiddenSubmit: boolean = true;
  pageTitle: string;
  contactForm: FormGroup;
  submitted = false;
  contactImageUrl: any;
  contactImageAlt: any;

  constructor(
    public page: PageTitleService,
    private formBuilder: FormBuilder,
    private formSubmit: FormsubmitService,
    private contentfulService: ContentfulService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.contactImageAlt = this.activatedRoute.snapshot.data.pageImage.description;
    this.contactImageUrl = this.activatedRoute.snapshot.data.pageImage.file.url;
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
    // this.contactForm.valueChanges.subscribe(console.log);
    this.pageTitle = this.page.getPageTitle;
    this.contactName = this.contactForm.controls.name.value;
    let form = document.querySelector('form');
    form.style.height = form.clientHeight + 'px';
  }

  get formFields() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    } else {
      const formData = new FormData();
      const { value } = this.contactForm;
      for (const key in value) {
        formData.append(key, value[key]);
      }
      this.formSubmit.sendForm(formData);
      this.contactName = this.contactForm.controls.name.value;
      this.formShown = false;
      this.hiddenSubmit = false;
    }
  }
}
