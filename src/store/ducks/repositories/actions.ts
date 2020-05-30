import { action } from "typesafe-actions";
import { RepositoriesTypes, IRepository } from "./types";

interface IPayload {
  data: IRepository[];
}

export interface ILoads {
  type: string;
  payload?: IPayload;
}

export const loadRequest = (): ILoads => action(RepositoriesTypes.LOAD_REQUEST);
export const loadSuccess = (data: IRepository[]): ILoads =>
  action(RepositoriesTypes.LOAD_SUCCESS, { data });
export const loadFailure = (): ILoads => action(RepositoriesTypes.LOAD_FAILURE);
