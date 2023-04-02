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

  constructor(private ref: ChangeDetectorRef) {
    console.log("lazy image construtor", this.data);
  }

  ngOnInit(): void {
    // console.log(this.data, 'data init changes ngOnInit', this.data.src, typeof (this.data));
    // // console.log(this.data, 'data init changes ngOnInit', JSON.parse(this.data));
    // this.imagdata = (this.data);
    // // this.imagdata = JSON.parse(this.data);
    // console.log(this.imagdata, 'imgdata ngOnInit');
  }
  public initchange() {
    // console.log("data init changes*******", JSON.parse(this.data));
    this.imagdata = JSON.parse(this.data);
    this.ref.detectChanges();
    // console.log(this.imagdata, "imgdata initchange", this.imagdata.src);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes, "changes ...");
    // console.log(changes.data, "changes data", changes.data.currentValue);
    // console.log("d data", typeof changes.data.currentValue, "c data ...");
    if (changes['data']) {
      console.log("in changes data block", changes);
      this.initchange();
    }
  }
}

