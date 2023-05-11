import React from "react";
import Picture1 from "../../assets/Informations/Picture1.jpg";
import Picture2 from "../../assets/Informations/Picture2.jpg";
import Picture3 from "../../assets/Informations/Picture3.jpg";

function Informations() {
  return (
    <div className="information_container">
      <div className="information">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a vero,
          natus corrupti animi autem consequatur accusantium aliquid porro!
          Debitis aspernatur est dolorum tenetur, qui tempore iusto quia harum
          expedita.
        </p>
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
