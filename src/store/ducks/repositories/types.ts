export enum RepositoriesTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCESS = "@repositories/LOAD_SUCCESS",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
}

export interface IRepository {
  id: number;
  name: string;
  html_url: string;
}

export interface IRepositoriesState {
  readonly data: IRepository[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface IPayload {
  data: IRepository[];
}

export interface IAction {
  type: string;
  payload: IPayload;
}
