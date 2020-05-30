import { combineReducers } from "redux";
import { IRepositoriesState } from "./repositories/types";
import repositories from "./repositories";

export interface IApplicationState {
  repositories: IRepositoriesState;
}

export default combineReducers({ repositories });
