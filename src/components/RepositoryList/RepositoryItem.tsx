import React from "react";
import { IPropsRepositoryItem } from "./types";

const RepositoryItem: React.FC<IPropsRepositoryItem> = ({ repository }) => {
  return (
    <div className="item-repository">
      <a href={repository.html_url} rel="noopener noreferrer" target="_blank">
        {repository.name}
      </a>
    </div>
  );
};

export default RepositoryItem;
