import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CardComponent} from "./components/card/card.component";
import {BannerComponent} from "./components/banner/banner.component";
import {MatCardModule} from "@angular/material/card";
import {CardListComponent} from "./components/card-list/card-list.component";
import {VideoDataService} from "./services/video-data.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {VideoPlayerComponent} from "./components/video-player/video-player.component";
import {VideoPlayerPageComponent} from "./components/video-player-page/video-player-page.component";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  declarations: [
    CardComponent,
    CardListComponent,
    BannerComponent,
    VideoPlayerComponent,
    VideoPlayerPageComponent,
  ],
  providers: [
    VideoDataService
  ],
  exports: [
    CardComponent,
    CardListComponent,
    BannerComponent,
    VideoPlayerComponent,
    VideoPlayerPageComponent,
  ]
})
export class VideoModule { }
