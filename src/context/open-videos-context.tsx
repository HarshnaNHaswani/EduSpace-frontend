import { createContext, useContext, useReducer } from "react";
import { openVideosReducer } from "reducers/openVideos/openVideosReducer";
import { getVideoService } from "services";
import { IdType, ProviderParamType } from "__types__/typeUtils/base.types";
import { OpenVideosProviderValueType } from "../__types__/context/openVideosContext.types";

const OpenVideosContext = createContext<
  OpenVideosProviderValueType | undefined
>(undefined);

const OpenVideosProvider = ({ children }: ProviderParamType) => {
  const initialState = {
    openVideos: [],
  };

  const [openVideosState, openVideosDispatch] = useReducer(
    openVideosReducer,
    initialState
  );
  const getVideo = async (videoId: IdType) => {
    try {
      if (videoId) {
        openVideosDispatch({
          type: "INITIALIZE_DATA",
          payload: { _id: videoId },
        });
        const response = await getVideoService({ videoId });
        if (response.status === 200) {
          openVideosDispatch({
            type: "SET_VIDEO_DATA",
            payload: { video: response.data.video },
          });
        } else {
          error: `${response.status}`;
          openVideosDispatch({
            type: "SET_VIDEO_ERROR",
            payload: {
              _id: videoId,
              error: `${response.status} ${
                response.statusText ? response.statusText : ""
              }`,
            },
          });
        }
      }
    } catch (err) {
      console.log(err);
      openVideosDispatch({
        type: "SET_VIDEO_ERROR",
        payload: {
          _id: videoId,
          error: `An error occured`,
        },
      });
    }
  };

  const openVideosValue: OpenVideosProviderValueType = {
    openVideos: openVideosState.openVideos,
    getVideo,
  };
  return (
    <OpenVideosContext.Provider value={openVideosValue}>
      {children}
    </OpenVideosContext.Provider>
  );
};

const useOpenVideos = () => {
  const context = useContext(OpenVideosContext);
  if (context === undefined) {
    throw new Error("useOpenVideos must be used within a OpenVideosProvider");
  }
  return context;
};

export { OpenVideosProvider, useOpenVideos };
