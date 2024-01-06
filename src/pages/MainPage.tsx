import { FC } from "react";
import DataBlock from "components/MainPage/DataBlock";
import WhyWe from "components/MainPage/WhyWe";
import Rates from "components/MainPage/Rates";

const MainPage: FC = () => {
  return (
    <main>
      <DataBlock />
      <WhyWe />
      <Rates />
    </main>
  );
};

export default MainPage;
