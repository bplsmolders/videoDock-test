import {Component, OnInit} from '@angular/core';
import {VideoDataService} from "../../services/video-data.service";
import {Video} from "../../models/video.model";
import {Observable} from "rxjs";

@Component({
  selector: 'vd-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  videoPlaylist$: Observable<Video[]>;

  constructor(
    private videoService: VideoDataService
  ) {
  }


  ngOnInit() {
    this.videoPlaylist$ = this.videoService.getVideos()
  }
}
