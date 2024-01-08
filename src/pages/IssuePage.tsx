import DocumentsBlock from "components/IssuePage/DocumentsBlock";
import SearchingBlock from "components/IssuePage/SearchingBlock";
import SortBlock from "components/IssuePage/SortBlock";
import { FC } from "react";

const IssuePage: FC = () => {
  return (
    <main>
      <SearchingBlock />
      <SortBlock />
      <DocumentsBlock />
    </main>
  );
};

export default IssuePage;
