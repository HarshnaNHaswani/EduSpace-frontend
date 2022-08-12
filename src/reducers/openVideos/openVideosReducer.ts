import React from 'react'
import { OpenVideosStateType } from '__types__/context/openVideosContext.types'
import { OpenVideosActionType } from '../../__types__/reducer/openVideoReducerActions.types'

export const openVideosReducer = (state:OpenVideosStateType, action:OpenVideosActionType) => {
  switch (action.type) {
    case "INITIALIZE_DATA":{
      let modifiedOpenVideos = [
        ...state.openVideos, 
        {
          videoData: {
            _id: action.payload._id,
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
          },
          error: '', 
          loading: true
        }
      ]
      if(modifiedOpenVideos.length > 10) modifiedOpenVideos =modifiedOpenVideos.slice(1)
      return {
        ...state,
        openVideos: modifiedOpenVideos
      }
    }
    case 'SET_VIDEO_DATA':
      return {
        ...state,
        openVideos: state.openVideos.map((video) => video.videoData._id === action.payload.video._id ? {...video, videoData:{...action.payload.video}, loading:false}: video)
      }

    case 'SET_VIDEO_ERROR': 
      return {
        ...state,
        openVideos: state.openVideos.map((video) => video.videoData._id === action.payload._id ? {...video, error: action.payload.error, loading:false}: video)

      } 
    default:
      return state;
  }
}
