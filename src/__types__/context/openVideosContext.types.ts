import { type } from "os";
import { VideoDataType } from "__types__/context/videosContext.types";
import { IdType } from "__types__/typeUtils/base.types";

export type InitialVideoDataType = {
  _id: IdType 
  title: "",
  description: "",
  creator: "",
  createdAt: "",
  likes: 0,
  dislikes: 0,
  views: {
    lastSevenDays: 0,
    lastMonth: 0,
    lastSixMonths: 0,
    total: 0,
  },
  category: [],
  src:
    "",
  poster: "",
  relatedQuizzes: [],
  comments: [],
 };
export type OpenVideoType = {
  videoData: VideoDataType | InitialVideoDataType
  error: string;
  loading: boolean;
};
export type OpenVideosStateType = {
  openVideos: [] | OpenVideoType[];
};
export type OpenVideosProviderValueType = {
  openVideos: [] | OpenVideoType[];
  getVideo: (id: IdType) => void;
};
