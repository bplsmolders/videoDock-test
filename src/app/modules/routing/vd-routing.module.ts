import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../../components/home/home.component";
import {VideoPlayerPageComponent} from "../video/components/video-player-page/video-player-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent }, // This is the default route (home page)
  { path: 'video/:videoId', component: VideoPlayerPageComponent }, // This is the default route (home page)
  // Add more routes as needed for other components or pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VdRoutingModule { }
