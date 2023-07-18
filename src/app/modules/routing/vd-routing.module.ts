import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../../components/home/home.component";
import {VideoPlayerPageComponent} from "../video/components/video-player-page/video-player-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'video/:videoId', component: VideoPlayerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VdRoutingModule {}
