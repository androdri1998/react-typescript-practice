import React from "react";
import { IPropsRepositoryItem } from "./types";

const RepositoryItem: React.FC<IPropsRepositoryItem> = ({ repository }) => {
  return <p>{repository.name}</p>;
};

export default RepositoryItem;
