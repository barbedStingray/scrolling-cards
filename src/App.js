import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import yosemite from './Images/Yosemite.jpg';
import cliffs from './Images/cliffs.jpg';
import themoment from './Images/themoment.jpg';
import oldWest from './Images/oldWest.jpg';
import river from './Images/river.jpg';
import joshuaTree from './Images/joshuaTree.jpg';
import spikeyrocks from './Images/spikeyrocks.jpg';

const images = [
  joshuaTree,
  themoment,
  cliffs,
  oldWest,
  river,
  spikeyrocks,
  yosemite
];

function App() {
  const scrollableContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [globalScrollProgress, setGlobalScrollProgress] = useState(0);

  useEffect(() => {
    const scrollableContainer = scrollableContainerRef.current;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollableContainer;
      const newScrollProgress = scrollLeft / (scrollWidth - clientWidth);
      setGlobalScrollProgress(newScrollProgress);
    };

    scrollableContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollableContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const relativeScrollPerCard = 1 / (images.length - 1);
    const previousScrollSnapPoint = relativeScrollPerCard * (activeIndex - 1);
    const nextScrollSnapPoint = relativeScrollPerCard * (activeIndex + 1);

    if (globalScrollProgress <= previousScrollSnapPoint && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (globalScrollProgress >= nextScrollSnapPoint && activeIndex < images.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  }, [globalScrollProgress, activeIndex]);

  function calculateStyles(index) {
    const relativeScrollPerCard = 1 / (images.length - 1);
    const cardRelativeScrollStart = relativeScrollPerCard * index;
    const cardScrollProgress = (globalScrollProgress - cardRelativeScrollStart) / relativeScrollPerCard;
    const absoluteCardScrollProgress = Math.abs(cardScrollProgress);
    const activeCardScrollProgress = globalScrollProgress / relativeScrollPerCard - activeIndex;
    const absoluteActiveCardScrollProgress = Math.abs(activeCardScrollProgress);

    let translateX = 0;
    let translateZ = 200 - absoluteCardScrollProgress * 40;
    let rotateY = 0;
    let rotateZ = cardScrollProgress * 2 * -1;
    let scale = 1 - absoluteCardScrollProgress * 0.05;
    let opacity = Math.max(0, Math.min(1, 5 - absoluteCardScrollProgress));
    let zIndex = images.length - Math.abs(activeIndex - index);

    if (activeIndex === index) {
      if (absoluteCardScrollProgress < 0.5) {
        translateX = -128 * cardScrollProgress;
      } else {
        translateX = -128 * Math.sign(cardScrollProgress) + 128 * cardScrollProgress;
        translateX += -((1 - absoluteCardScrollProgress / images.length / 4) * 10) *
          (absoluteCardScrollProgress - 0.5) * 2 * Math.sign(cardScrollProgress);
      }
    } else {
      translateX = cardScrollProgress * -((1 - absoluteCardScrollProgress / images.length / 4) * 10);
    }

    return {
      transform: `translateX(${translateX - 50}%) translateY(-50%) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
      zIndex,
      opacity,
    };
  };

  return (
    <div className="App">
      <div className="parent">
        <div className="scrollable-container" ref={scrollableContainerRef}>
          {images.map((image, index) => (
            <a className="scrollable-card" href="/#" key={index}></a>
          ))}
        </div>

        <div className="visible-cards-container">
          {images.map((image, index) => (
            <div className="visible-card" key={index} style={calculateStyles(index)}>
              <div
                className="visible-card-content"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
