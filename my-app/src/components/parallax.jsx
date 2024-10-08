import React, { useEffect, useRef } from "react";



function Parallax() {
  const textRef = useRef(null);
  const leafRef = useRef(null);
  const hill1Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);
  const treeRef = useRef(null); // Reference for the tree

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (window.innerWidth > 768) {
        if (textRef.current)
          textRef.current.style.marginTop = value * 1.5 + "px";
        if (leafRef.current) {
          leafRef.current.style.top = value * -1.5 + "px";
          leafRef.current.style.left = value * 1.5 + "px";
        }
        if (hill1Ref.current) hill1Ref.current.style.top = value * 1 + "px";
        if (hill4Ref.current) hill4Ref.current.style.left = value * -1.5 + "px";
        if (hill5Ref.current) hill5Ref.current.style.left = value * 1.5 + "px";
        if (treeRef.current) treeRef.current.style.left = value * -0.5 + "px"; // Slower movement for the tree
      } else {
        // Reset styles for mobile devices
        if (textRef.current) textRef.current.style.marginTop = "0px";
        if (leafRef.current) {
          leafRef.current.style.top = "0px";
          leafRef.current.style.left = "0px";
        }
        if (hill1Ref.current) hill1Ref.current.style.top = "0px";
        if (hill4Ref.current) hill4Ref.current.style.left = "0px";
        if (hill5Ref.current) hill5Ref.current.style.left = "0px";
        if (treeRef.current) treeRef.current.style.left = "0px"; // Reset tree position
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="para">
      <section className="parallax">
        <img
          src="/assets/images/hill1.png"
          ref={hill1Ref}
          id="hill1"
          alt="greenery"
        />
        <img src="/assets/images/hill2.png" id="hill2" alt="greenery" />
        <img src="/assets/images/hill3.png" id="hill3" alt="greenery" />
        <img
          src="/assets/images/hill4.png"
          ref={hill4Ref}
          id="hill4"
          alt="greenery"
        />
        <img
          src="/assets/images/hill5.png"
          ref={hill5Ref}
          id="hill5"
          alt="greenery"
        />
        <img
          src="/assets/images/leaf.png"
          ref={leafRef}
          id="leaf"
          alt="greenery"
        />
        <img
          src="/assets/images/tree.png"
          ref={treeRef} // Add ref to tree
          id="tree"
          alt="greenery"
        />
        <h2 id="text" ref={textRef}>
          FARMER's TOOL
        </h2>
        <img src="/assets/images/plant.png" id="plant" alt="greenery" />
      </section>
        
    </div>

  );
}

export default Parallax;
