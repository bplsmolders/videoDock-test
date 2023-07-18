import {Component, OnInit} from '@angular/core';
import {Video} from "../../models/video.model";
import {VideoDataService} from "../../services/video-data.service";
import {Observable, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'vd-video-player-page',
  templateUrl: './video-player-page.component.html',
  styleUrls: ['./video-player-page.component.scss']
})
export class VideoPlayerPageComponent implements OnInit {
  video$: Observable<Video>;

  constructor(
    private videoService: VideoDataService,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit() {
    // we get the videoId from the route param, and use it in our data stream to get the right video
    this.video$ = this.route.params.pipe(
      switchMap((urlParam: { videoId: string }) => this.videoService.getVideo(urlParam.videoId))
    );
  }
}
