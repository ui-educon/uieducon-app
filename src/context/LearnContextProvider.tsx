import React, { useContext, createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

interface LearnContextType {
  currentContent: ResourceType | null;
  displayBar: Boolean;
  setDisplayBar: Function;
  setCurrentContent: Function;
}

const LearnContext = createContext<LearnContextType>({
  currentContent: null,
  displayBar: false,
  setDisplayBar: () => {},
  setCurrentContent: () => {},
});

const LearnContextProvider = ({ children }: Props) => {
  const [currentContent, setCurrentContent] = useState<ResourceType | null>(
    null
  );
  const [displayBar, setDisplayBar] = useState<Boolean>(false);
  return (
    <LearnContext.Provider
      value={{ currentContent, setCurrentContent, displayBar, setDisplayBar }}
    >
      {children}
    </LearnContext.Provider>
  );
};

export const learnState = () => {
  return useContext(LearnContext) as LearnContextType;
};

export default LearnContextProvider;
