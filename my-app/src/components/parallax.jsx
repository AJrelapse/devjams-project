import React, { useEffect, useRef } from 'react';

function Parallax() {
  // Create refs to access DOM elements
  const textRef = useRef(null);
  const leafRef = useRef(null);
  const hill1Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      // Apply parallax effect using refs
      if (textRef.current) textRef.current.style.marginTop = value * 2.5 + 'px';
      if (leafRef.current) {
        leafRef.current.style.top = value * -1.5 + 'px';
        leafRef.current.style.left = value * 1.5 + 'px';
      }
      if (hill1Ref.current) hill1Ref.current.style.top = value * 1 + 'px';
      if (hill4Ref.current) hill4Ref.current.style.left = value * -1.5 + 'px';
      if (hill5Ref.current) hill5Ref.current.style.left = value * 1.5 + 'px';
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
     

      <section className="parallax">
        <img src="/assets/images/hill1.png" ref={hill1Ref} id="hill1" alt="greenary"></img>
        <img src="/assets/images/hill2.png" id="hill2" alt="greenary"></img>
        <img src="/assets/images/hill3.png" id="hill3" alt="greenary"></img>
        <img src="/assets/images/hill4.png" ref={hill4Ref} id="hill4" alt="greenary"></img>
        <img src="/assets/images/hill5.png" ref={hill5Ref} id="hill5" alt="greenary"></img>
        <img src="/assets/images/leaf.png" ref={leafRef} id="leaf" alt="greenary"></img>
        <img src="/assets/images/tree.png" id="tree" alt="greenary"></img>
        <h2 id="text" ref={textRef}>FARMER's TOOL</h2>
        <img src="/assets/images/plant.png" id="plant" alt="greenary"></img>
      </section>
    </div>
  );
}

export default Parallax;
