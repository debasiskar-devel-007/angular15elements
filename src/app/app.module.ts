import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ImagesLazyloadModule } from './shared/images-lazyload/images-lazyload.module';


import { AppComponent } from './app.component';
import { LazyimageComponent } from './lazyimage/lazyimage.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyimageComponent
  ],
  imports: [
    BrowserModule, ImagesLazyloadModule,
  ],
  providers: [],
  entryComponents: [
    LazyimageComponent
  ],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private injector: Injector
  ) {

    const elements: any[] = [
      [LazyimageComponent, 'lazy-image'],
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
  ngDoBootstrap() {
  }
}
