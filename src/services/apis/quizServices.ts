import axios from "axios";
import { GetItemType } from  "__types__/services/services.types";
import { IdType } from  "__types__/typeUtils/base.types";

type MultipleQuizzes = {quizIds: IdType[]}
export const getAllQuizzesService = async () => await axios.get("/api/quizzes");
export const getQuizService = async ({ quizId }:GetItemType) =>
  await axios.get(`/api/quizzes/${quizId}`);

export const getQuizzesForVideoService = async ({ quizIds }:MultipleQuizzes) =>
  await Promise.all([...quizIds].map((quizId) => getQuizService({ quizId })));
