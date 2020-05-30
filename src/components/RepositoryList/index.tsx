import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";

import config from "../../config.json";
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
      <p className="title-repositories">{config.name}'s repositories</p>
      {repositories.map((repository, index) => (
        <RepositoryItem key={index} repository={repository} />
      ))}
    </div>
  );
};

export default RepositoryList;
