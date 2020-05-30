import { IRepository } from "../../store/ducks/repositories/types";

export interface IProps {}

export interface IPropsRepositoryItem {
  repository: IRepository;
}

export interface IState {
  newRepository?: string;
}
