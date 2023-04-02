import { Injector, Directive, ElementRef } from "@angular/core";
import { ImagesLazyloadService } from "./images-lazyload.service";

@Directive({
  // Tận dụng thuộc tính "loading" làm directive selector
  // Bạn có thể sử dụng tên gì khác cũng được
  selector: "[loading]",
})
export class ImagesLazyloadDirective {
  constructor(private injector: Injector, private el: ElementRef) {
    const img = this.el.nativeElement;

    // Nếu browser đã support thuộc tính "loading", chúng ta không cần phải làm gì thêm nữa, hãy để nó làm công việc của nó.
    // Tuy nhiên nếu element không phải là img (nó là background image), thì fallback về intersection observable
    if (
      "loading" in HTMLImageElement.prototype &&
      img.tagName.toLowerCase() === "img"
    ) {
      // if (img != null && img.dataset != null) img.src = img.dataset.src;
      setTimeout(() => {
        const lazyService = this.injector.get(ImagesLazyloadService);

        lazyService.observe(img);
      }, 500);
    } else {
      // console.log('not lazy');
      // fallback sử dụng intersection observable API
      const lazyService = this.injector.get(ImagesLazyloadService);
      lazyService.observe(img);
    }
  }
}
