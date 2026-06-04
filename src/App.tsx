import { useEffect, useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Navigation,
} from "@components";

import "./localization/i18n";
import i18n from "./localization";

/** Корневой компонент одностраничной визитки с локализацией и scrollspy. */
function App() {
  const localization = navigator.language.split("-")[0];

  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    i18n.changeLanguage(localization);
  }, [localization]);

  return (
    <Scrollspy sectionRefs={sectionRefs}>
      {({
        currentElementIndexInViewport,
      }: {
        currentElementIndexInViewport: number;
      }) => (
        <>
          <Header sectionRef={sectionRefs[0]} />
          <About sectionRef={sectionRefs[1]} />
          <Experience sectionRef={sectionRefs[2]} />
          <Contact sectionRef={sectionRefs[3]} />
          <Footer sectionRef={sectionRefs[4]} />
          <Navigation currentSection={currentElementIndexInViewport} />
        </>
      )}
    </Scrollspy>
  );
}

export default App;
