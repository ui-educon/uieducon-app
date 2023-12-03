import LearnContainer from "@/components/Learn/LearnContainer";
import PrivateRouteWrapper from "@/components/wrappers/private-route-wrapper";
import LearnContextProvider from "@/context/LearnContextProvider";
import React from "react";

type Props = {};

const learn = (props: Props) => {
  return (
    <PrivateRouteWrapper>
      <LearnContextProvider>
        <LearnContainer />
      </LearnContextProvider>
    </PrivateRouteWrapper>
  );
};

export default learn;
