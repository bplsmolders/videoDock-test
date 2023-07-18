import {Component, Input} from '@angular/core';
import {Video} from "../../models/video.model";

@Component({
  selector: 'vd-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
  @Input()
  video: Video;
}
