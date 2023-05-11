import React from "react";
import { useParams } from "react-router-dom";
import oceans from "../../data/oceans.json";
import Picture1 from "../../assets/Informations/Picture1.jpg";
import Picture2 from "../../assets/Informations/Picture2.jpg";
import Picture3 from "../../assets/Informations/Picture3.jpg";

function Informations() {
  const { id } = useParams();
  const oceanData = oceans.filter(
    (ocean) => ocean.id === Number.parseInt(id, 10)
  )[0];
  return (
    <div className="information_container">
      <h2>{oceanData.title}</h2>
      <div className="information">
        <p>{oceanData.content}</p>
      </div>
      <div className="pictures_info_container">
        <img className="picture1_info" src={Picture1} alt="ocean_picture1" />
        <img className="picture2_info" src={Picture2} alt="ocean_picture2" />
        <img className="picture3_info" src={Picture3} alt="ocean_picture3" />
      </div>
    </div>
  );
}

export default Informations;
