import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Bubbles from "./Bubbles";
import oceans from "../data/oceans.json";

function Selection() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {scrollTop >= 5 && (
        <span className="bubble-container1">
          <Bubbles />
        </span>
      )}
      <div className="verybig-container">
        {oceans.map((ocean) => {
          return (
            <div key={ocean.id} className="verybig-bubbles">
              <h3>
                <NavLink to={`/ocean/${ocean.id}`} className="link">
                  {ocean.title}
                </NavLink>
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Selection;
