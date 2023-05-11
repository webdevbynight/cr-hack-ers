import React from "react";
import { useParams } from "react-router-dom";
import Informations from "../components/ocean/Informations";

function Ocean() {
  const { id } = useParams();
  return <Informations id={id} />;
}

export default Ocean;
