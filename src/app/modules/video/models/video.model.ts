export interface VideoResponse {
  description: string,
  feed_instance_id: string,
  feedid: string,
  kind: string,
  links: {first:string, last:string},
  playlist: Video[],
  shelfImage: string,
  title: string
}

export interface Video {
  title: string;
  mediaid: string;
  link: string;
  image: string;
  images: {
    src: string;
    width: number;
    type: string;
  }[];
  feedid: string;
  duration: number;
  pubdate: number;
  description: string;
  tags: string;
  sources: {
    file: string;
    type: string;
    height: number;
    width: number;
    label: string;
    bitrate: number;
    filesize: number;
    framerate: number;
  }[];
  tracks: {
    file: string;
    kind: string;
  }[];
  variations: any;
  rating: string;
  genre: string;
  free: string;
  shelfImage: string;
}
