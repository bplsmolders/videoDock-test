import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {Video, VideoResponse} from "../models/video.model";

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  readonly videoUrl = 'https://cdn.jwplayer.com/v2/playlists/sR5VypYk';
  private videosSubject$ = new BehaviorSubject<Video[]>([])

  constructor(private http: HttpClient) {
  }

  /**
   * Returns the playlist with video's
   **/
  getVideos(): Observable<Video[]> {
    return this.videosSubject$.value.length ? this.videosSubject$.asObservable() : this.fetchVideoData();
  }

  /**
   * Returns a single video
   **/
  getVideo(mediaId: any): Observable<Video> {
    const videos$ = this.videosSubject$.value.length ? this.videosSubject$.asObservable() : this.fetchVideoData();
    return videos$.pipe(
      map((videos: Video[]) => videos.find(vid => vid.mediaid === mediaId))
    )
  }

  /**
   * This fetches the data from the backend api, returns it and sets its value in the videosubject.
   * This way we get a statefull service, and we only have to make a single call to the BE.
   **/
  private fetchVideoData(): Observable<Video[]> {
    return this.http.get<VideoResponse>(this.videoUrl).pipe(
      map((videoRes) => videoRes.playlist),
      tap((videos) => this.videosSubject$.next(videos))
    )
  }
}
