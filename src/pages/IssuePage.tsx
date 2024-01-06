import DocumentsBlock from "components/IssuePage/DocumentsBlock";
import SortBlock from "components/IssuePage/SortBlock";
import { FC } from "react";

const IssuePage: FC = () => {
  return (
    <main>
      <SortBlock />
      <DocumentsBlock />
    </main>
  );
};

export default IssuePage;
