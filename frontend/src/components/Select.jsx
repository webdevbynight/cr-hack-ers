import { Link, useParams } from "react-router-dom";
import oceans from "../data/oceans.json";

function Select() {
  const { id } = useParams();
  return (
    <nav className="select-ocean">
      <ul>
        {oceans &&
          oceans
            .filter((ocean) => ocean.id !== Number.parseInt(id, 10))
            .map((ocean) => (
              <li key={ocean.id}>
                <Link to={`/ocean/${ocean.id}`}>{ocean.title}</Link>
              </li>
            ))}
        <div className="dot" />
      </ul>
    </nav>
  );
}

export default Select;
