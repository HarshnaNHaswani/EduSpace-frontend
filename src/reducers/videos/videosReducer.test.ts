import { VideosStateType } from "__types__/context/videosContext.types"
import { SetErrorType, SetLoadingTrueType, SetVideosType } from "__types__/reducer/videosReducerActions.types"
import { vidoesReducer } from "./videosReducer"

describe('test all videos reducer',() =>{
  const initialState:VideosStateType = {
    videos: [],
    loadState: false,
    error: {}
  }
  test('should set loading true',()=> {
    const action:SetLoadingTrueType = {
      type: 'SET_LOADING_TRUE'
    }
    const expectedState = {
      videos: [],
      loadState: true,
      error: {}
    }
    expect(vidoesReducer(initialState, action)).toEqual(expectedState)
  })
  test('should set error',()=> {
    const action:SetErrorType = {
      type: 'SET_ERROR',
      payload: {
        error: {
          status: 404
        }
      }
    }
    const expectedState = {
      videos: [],
      loadState: false,
      error: {status: 404}
    }
    expect(vidoesReducer(initialState, action)).toEqual(expectedState)
  })
  test('should set all videos data',()=> {
    const action:SetVideosType = {
      type: 'SET_VIDEOS',
      payload: {
        videosData:[
          {
            _id: "1",
            title: "Design Basics",
            description: "Web Tech Foundation",
            creator: "Pexels",
            createdAt: "2022-01-31",
            likes: 5,
            dislikes: 3,
            views: {
              lastSevenDays: 13,
              lastMonth: 15,
              lastSixMonths: 150,
              total: 512,
            },
            category: ["1", "9"],
            src:
              "https://res.cloudinary.com/harshna/video/upload/v1656740975/vidLib/Pexels_Videos_1580507_cn8ya6.mp4",
            poster: "",
            relatedQuizzes: ["2"],
            comments: [
              {
                userId: "fykffh8rmijpo",
                comment: "this was good",
              },
            ],
          },
          {
            _id: "2",
            title: "React",
            description: "React JS",
            creator: "Pexels",
            createdAt: "2022-02-17",
            likes: 7,
            dislikes: 2,
            views: {
              lastSevenDays: 31,
              lastMonth: 115,
              lastSixMonths: 10,
              total: 177,
            },
            category: ["1", "9"],
            src:
              "https://res.cloudinary.com/harshna/video/upload/v1656740978/vidLib/Pexels_Videos_2086113_plgekh.mp4",
            poster: "",
            relatedQuizzes: ["3", "1"],
            comments: [
              {
                userId: "rognkijsvxysg",
                comment: "Needs more depth",
              },
            ],
          },
        ]
      }
    }
    const expectedState = {
      videos: [
        {
          _id: "1",
          title: "Design Basics",
          description: "Web Tech Foundation",
          creator: "Pexels",
          createdAt: "2022-01-31",
          likes: 5,
          dislikes: 3,
          views: {
            lastSevenDays: 13,
            lastMonth: 15,
            lastSixMonths: 150,
            total: 512,
          },
          category: ["1", "9"],
          src:
            "https://res.cloudinary.com/harshna/video/upload/v1656740975/vidLib/Pexels_Videos_1580507_cn8ya6.mp4",
          poster: "",
          relatedQuizzes: ["2"],
          comments: [
            {
              userId: "fykffh8rmijpo",
              comment: "this was good",
            },
          ],
        },
        {
          _id: "2",
          title: "React",
          description: "React JS",
          creator: "Pexels",
          createdAt: "2022-02-17",
          likes: 7,
          dislikes: 2,
          views: {
            lastSevenDays: 31,
            lastMonth: 115,
            lastSixMonths: 10,
            total: 177,
          },
          category: ["1", "9"],
          src:
            "https://res.cloudinary.com/harshna/video/upload/v1656740978/vidLib/Pexels_Videos_2086113_plgekh.mp4",
          poster: "",
          relatedQuizzes: ["3", "1"],
          comments: [
            {
              userId: "rognkijsvxysg",
              comment: "Needs more depth",
            },
          ],
        },
      ],
      loadState: false,
      error: {}
    }
    expect(vidoesReducer(initialState, action)).toEqual(expectedState)
  })
})