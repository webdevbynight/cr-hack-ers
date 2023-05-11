import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bubbles from "./Bubbles";

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
        <div className="verybig-bubbles bubble1">
          <h3>
            <Link to="/ocean/1">Océan Pacifique</Link>
          </h3>
        </div>
        <div className="verybig-bubbles bubble2">
          <h3>
            <Link to="/ocean/2">Océan Arctique</Link>
          </h3>
        </div>

        <div className="verybig-bubbles bubble3">
          <h3>
            <Link to="/ocean/3">Océan Atlantique</Link>
          </h3>
        </div>

        <div className="verybig-bubbles bubble4">
          <h3>
            <Link to="/ocean/4">
              Océan <br /> Indien
            </Link>
          </h3>
        </div>

        <div className="verybig-bubbles bubble5">
          <h3>
            <Link to="/ocean/5">Océan Antarctique</Link>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Selection;
