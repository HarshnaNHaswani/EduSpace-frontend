import { AxiosError } from "axios";
import { TextType, IdType, SrcType } from "../typeUtils/base.types";


export type VideoDataType = {
  _id: IdType;
  title: TextType;
  description: TextType;
  creator: TextType;
  likes: number;
  dislikes: number;
  views: {
    lastSevenDays: number;
    lastMonth: number;
    lastSixMonths: number;
    total: number;
  };
  src: SrcType;
  poster?: SrcType;
  category: IdType[];
  relatedQuizzes: IdType[] | [];
  comments: {
    userId: IdType;
    comment: TextType;
  }[] | [];
  createdAt: string;
};

export type VideosStateType = {
  videos: [] | VideoDataType[]
  loadState: boolean
  error: unknown
}
export type VideosValueType = {
  videosState: VideosStateType
}| undefined