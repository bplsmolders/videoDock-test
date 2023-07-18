import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, catchError, EMPTY, map, Observable, tap} from 'rxjs';
import {Video, VideoResponse} from "../models/video.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  readonly videoUrl = 'https://cdn.jwplayer.com/v2/playlists/sR5VypYk';
  private videosSubject$ = new BehaviorSubject<Video[]>([])

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) {
  }

  /**
   * Returns the playlist with video's
   **/
  getVideos(): Observable<Video[]> {
    return this.videosSubject$.value.length ? this.videosSubject$.asObservable() : this.fetchVideoData();
  }

  /**
   * Returns a single video based on the mediaId.
   * makes use of the behaviorsubject if it has a value.
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
   * Shows an error snackbar when a call goes wrong.
   **/
  private fetchVideoData(): Observable<Video[]> {
    return this.http.get<VideoResponse>(this.videoUrl).pipe(
      map((videoRes) => videoRes.playlist),
      tap((videos) => this.videosSubject$.next(videos)),
      catchError(() => {
        this.snackbar.open('Something went wrong', 'Close', {
          duration: 5000, // display error for 5 seconds
          panelClass: ['error-snackbar'] //style is put in main styles.scss so it can be reused
        })
        return EMPTY
      })
    )
  }
}
