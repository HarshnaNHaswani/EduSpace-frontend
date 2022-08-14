import { OpenVideosStateType } from "__types__/context/openVideosContext.types"
import { InitializeDataType, SetVideoDataType, SetVideoErrorType } from "__types__/reducer/openVideoReducerActions.types"
import { openVideosReducer } from "./openVideosReducer"

describe('testing open videos reducer', () => {

  test('should initialize video data', () => { 
    const initialState:OpenVideosStateType = {
      openVideos: []
    }
    const action:InitializeDataType = {
      type: 'INITIALIZE_DATA',
      payload: {
        _id: '123abc'
      }
    }
    const expectedState = {
      openVideos: [{videoData: 
        {_id: '123abc', title: "",
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
     }, error: '', loading: true}]
    }

    expect(openVideosReducer(initialState, action)).toEqual(expectedState)
   })
  test('should set video error', () => { 
    const initialState:OpenVideosStateType = {
      openVideos: [{videoData: {_id: '123abc',
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
     }, error: '', loading: true}]
    }
    const action:SetVideoErrorType = {
      type: 'SET_VIDEO_ERROR',
      payload: {
        _id: "123abc",
        error: 'Unable to retrieve data'
      }
    }
    const expectedState = {
      openVideos: [
        {
          videoData: {
              _id: "123abc",
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
          error: 'Unable to retrieve data', 
          loading: false
        }
      ]
    }
    expect(openVideosReducer(initialState, action)).toEqual(expectedState)
   })
  test('should set video data', () => { 
    const initialState:OpenVideosStateType = {
      openVideos: [{videoData: {_id: '123abc',
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
     }, error: '', loading: true}]
    }
    const action:SetVideoDataType = {
      type: 'SET_VIDEO_DATA',
      payload: {
        video:   {
          _id: "123abc",
          title: "Agile",
          description: "Software Development Technique",
          creator: "Pexels",
          createdAt: "2022-06-18",
          likes: 17,
          dislikes: 12,
          views: {
            lastSevenDays: 3,
            lastMonth: 15,
            lastSixMonths: 150,
            total: 170,
          },
          category: ["8"],
          src:
            "https://res.cloudinary.com/harshna/video/upload/v1656740972/vidLib/pexels-rodnae-productions-8363813_dhjhuh.mp4",
          poster: "",
          relatedQuizzes: [],
          comments: [],
        },
      }
    }
    const expectedState = {
      openVideos: [
        {
          videoData: {
             _id: "123abc",
            title: "Agile",
            description: "Software Development Technique",
            creator: "Pexels",
            createdAt: "2022-06-18",
            likes: 17,
            dislikes: 12,
            views: {
              lastSevenDays: 3,
              lastMonth: 15,
              lastSixMonths: 150,
              total: 170,
            },
            category: ["8"],
            src:
              "https://res.cloudinary.com/harshna/video/upload/v1656740972/vidLib/pexels-rodnae-productions-8363813_dhjhuh.mp4",
            poster: "",
            relatedQuizzes: [],
            comments: [],
          }, 
          error: '', 
          loading: false
        }
      ]
    }

    expect(openVideosReducer(initialState, action)).toEqual(expectedState)
   })
}
)