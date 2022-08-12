import axios from "axios";
import { GetItemType } from  "__types__/services/services.types";
export const getAllVideosService = async () => await axios.get("/api/videos");

export const getVideoService = async ({ videoId }:GetItemType) =>
  await axios.get(`/api/video/${videoId}`);
