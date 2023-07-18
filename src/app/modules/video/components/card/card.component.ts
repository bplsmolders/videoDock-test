import {Component, Input} from '@angular/core';
import {Video} from "../../models/video.model";
import {Router} from "@angular/router";

@Component({
  selector: 'vd-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  video: Video;

  constructor(private router: Router) {
  }

  playVideo() {
    this.router.navigate(['video', this.video.mediaid])
  }
}
