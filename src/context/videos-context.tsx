import { createContext, useContext, useEffect, useReducer } from "react";
import { vidoesReducer } from "reducers/videos/videosReducer";
import { getAllVideosService, likeVideoService } from "services";
import {
  VideoDataType,
  VideosValueType
} from "__types__/context/videosContext.types";
import { ProviderParamType } from "__types__/typeUtils/base.types";
import { useAuth } from "./auth-context";

const initialState = {
  videos: [],
  loadState: false,
  error: {}
};

const VideosContext = createContext<VideosValueType>(undefined);

const VideosProvider = ({ children }: ProviderParamType) => {
  const [videosState, videosDispatch] = useReducer(vidoesReducer, initialState);
  const {authData: {token}} = useAuth();
  const likeVideo = async ({video}:{video: VideoDataType}) => {
    const response = await likeVideoService({token, video})
  }
  useEffect(() => {
    (async () => {
      try {
        videosDispatch({ type: "SET_LOADING_TRUE" });
        const response = await getAllVideosService();
        if (response.status == 200) {
          videosDispatch({
            type: "SET_VIDEOS",
            payload: { videosData: response.data.videos },
          });
        }
        else {
          videosDispatch({type: 'SET_ERROR', payload:{error: {response}}})
        }
      } catch (error) {
        videosDispatch({type: 'SET_ERROR', payload:{error }})
        console.log(error);
      }
    })();
  }, []);
  return (
    <VideosContext.Provider value={{ videosState }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => {
  const context = useContext(VideosContext);
  if (context === undefined) {
    throw new Error("useVideos must be used within a VideosProvider");
  }
  return context;
};

export { VideosProvider, useVideos };

