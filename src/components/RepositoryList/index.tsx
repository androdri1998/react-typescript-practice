import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RepositoryItem from "./RepositoryItem";
import { IProps } from "./types";
import { IApplicationState } from "../../store/ducks/rootReducer";
import { IRepository } from "../../store/ducks/repositories/types";
import { loadRequest } from "../../store/ducks/repositories/actions";

const RepositoryList: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);
  const repositories = useSelector<IApplicationState, IRepository[]>(
    (state) => state.repositories.data
  );

  return (
    <div>
      {repositories.map((repository, index) => (
        <RepositoryItem key={index} repository={repository} />
      ))}
    </div>
  );
};

export default RepositoryList;
