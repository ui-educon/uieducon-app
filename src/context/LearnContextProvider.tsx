import React, { useContext, createContext, useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

interface LearnContextType {
  currentContent: ResourceType | null;
  currentCourse: CourseType | null;
  currentIndex: number;
  displayBar: Boolean;
  setDisplayBar: Function;
  setCurrentContent: Function;
  setCurrentCourse: Function;
  setCurrentIndex: Function;
}

const LearnContext = createContext<LearnContextType>({
  currentContent: null,
  currentCourse: null,
  currentIndex: 0,
  displayBar: false,
  setDisplayBar: () => {},
  setCurrentContent: () => {},
  setCurrentCourse: () => {},
  setCurrentIndex: () => {},
});

const LearnContextProvider = ({ children }: Props) => {
  const [currentContent, setCurrentContent] = useState<ResourceType | null>(
    null
  );
  const [currentCourse, setCurrentCourse] = useState<CourseType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [displayBar, setDisplayBar] = useState<Boolean>(false);

  useEffect(() => {
    if (screen.width >= 768) setDisplayBar(true);
  }, []);

  return (
    <LearnContext.Provider
      value={{
        currentContent,
        setCurrentContent,
        currentCourse,
        setCurrentCourse,
        currentIndex,
        setCurrentIndex,
        displayBar,
        setDisplayBar,
      }}
    >
      {children}
    </LearnContext.Provider>
  );
};

export const learnState = () => {
  return useContext(LearnContext) as LearnContextType;
};

export default LearnContextProvider;
