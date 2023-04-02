import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ImagesLazyloadService {
  private observer!: IntersectionObserver;

  constructor() {
    this.init();
  }

  private init() {
    this.observer = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const lazyImage: any = entry.target as HTMLImageElement;
        const imageSrc = lazyImage.dataset.orgsrc;

        lazyImage.classList.remove("hideimg");

        if (!imageSrc) {
          return;
        }

        // lazyImage.style.backgroundImage = "url('" + src + "')";

        const tempImage = document.createElement("img");
        tempImage.src = lazyImage.dataset.orgsrc;

        tempImage.addEventListener("load", () => {
          setTimeout(() => {
            lazyImage.setAttribute("src", lazyImage.dataset.orgsrc);
            tempImage.remove();
          }, 500);
        });

        lazyImage.removeAttribute("loading");

        imgObserver.unobserve(lazyImage);
      });
    });
  }

  observe(target: Element) {
    this.observer.observe(target);
  }
}
