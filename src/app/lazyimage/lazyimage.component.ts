import {
  Component,
  Input,
  OnChanges,
  ViewEncapsulation,
  SimpleChanges,
  Output,
  EventEmitter,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from "rxjs";


@Component({
  selector: 'app-lazyimage',
  templateUrl: './lazyimage.component.html',
  styleUrls: ['./lazyimage.component.css']
})
export class LazyimageComponent implements OnChanges {
  @Input() data: any;
  public imagdata: any;
  resetdata: boolean = true;
  @Output() coolEvent = new EventEmitter();


  constructor(private ref: ChangeDetectorRef, public el: ElementRef) {
    console.log("lazy image construtor", this.data);
  }

  ngOnInit(): void {

  }

  emitevent() {
    // console.log('ddd');
    this.coolEvent.emit('cool-event');
    const domEvent = new CustomEvent('cool-event');
    this.el.nativeElement.setAttribute('element-data', '900009');
    this.el.nativeElement.dispatchEvent(domEvent);
    // console.log('ddd 22');

  }


  public initchange() {
    console.log("data init changes*******", JSON.parse(this.data));
    this.resetdata = !this.resetdata;
    this.imagdata = JSON.parse(this.data);
    setTimeout(() => {
      this.resetdata = !this.resetdata;

      this.ref.detectChanges();

    }, 10);
    console.log(this.imagdata, "imgdata initchange", this.imagdata.src);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes.data, "changes data", changes.data.currentValue);
    // console.log("d data", typeof changes.data.currentValue, "c data ...");
    if (changes['data']) {
      console.log("in changes data block", changes);
      this.initchange();
    }
  }
}

