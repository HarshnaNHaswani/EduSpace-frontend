import { IdType, TokenType } from "../typeUtils/base.types";
import { VideoDataType } from "../context/videosContext.types";
import { PlaylistDataType } from "__types__/context/userContext.types";

export type GetItemType = {
  [key: string]: IdType
}
export type AddType = {
  video: VideoDataType;
  token: TokenType;
}

export type AddPlaylistType =  {
  token: TokenType
  playlist: PlaylistDataType
}

export type AddToPlaylistType = AddType & {
  playlistId: IdType;
}
export type RemoveType = {
  [key:string]: IdType,
  token: TokenType
}
export type RemoveFromPlaylistType = RemoveType & {
  playlistId: IdType;
}


export type AuthorizedGetType = {
  token: TokenType
}
export type HeadersType = {
  headers: {
    token: TokenType
  }
}
export type APIType = {
  url: string,
  body: {} | {video: VideoDataType},
  headers: HeadersType
}
//TODO:
// increase video likes/dislikes on like
// increase views

