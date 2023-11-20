import LearnContainer from "@/components/Learn/LearnContainer";
import LearnContextProvider from "@/context/LearnContextProvider";
import React from "react";

type Props = {};

const learn = (props: Props) => {
  return (
    <LearnContextProvider>
      <LearnContainer />
    </LearnContextProvider>
  );
};

export default learn;
