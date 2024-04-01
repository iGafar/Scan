import DocumentsBlock from "components/IssuePage/DocumentsBlock";
import SearchingBlock from "components/IssuePage/SearchingBlock";
import SortBlock from "components/IssuePage/SortBlock";
import { FC, useEffect } from "react";

const IssuePage: FC = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      <SearchingBlock />
      <SortBlock />
      <DocumentsBlock />
    </main>
  );
};

export default IssuePage;
