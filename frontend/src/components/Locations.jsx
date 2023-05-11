import { useState } from "react";

const locations = [
  {
    id: 1,
    url: "https://img.freepik.com/photos-gratuite/composition-nature-morte-piscine-nuit_23-2148633537.jpg?w=1480&t=st=1683817097~exp=1683817697~hmac=cd7c508a41350cf8782b950e5bfb851d4675c9ea418b3cf273e8e4a3bef380bf",
    title: "Ocean Room 200€/nuitée",
    message:
      "Venez vous immerger dans le coquillage de l'amour. Profitez d'un confort total.",
  },
  {
    id: 2,
    url: "https://img.freepik.com/photos-gratuite/vue-drone-vagues-mer-rivage-rocheux_53876-101406.jpg?w=1380&t=st=1683816490~exp=1683817090~hmac=d6731581209ca1489dd0501c8e2b79cccffa76b124beca1723861a28b3bd06b9",
    title: "Ocean Room 200€/nuitée",
    message:
      "Another Ocean Room 200€/nuitée! Venez vous immerger dans le coquillage de l'amour. Profitez d'un confort total.",
  },
  {
    id: 3,
    url: "https://img.freepik.com/photos-gratuite/piscine-interieure_23-2147687650.jpg?w=996&t=st=1683815455~exp=1683816055~hmac=0ee065bbb8dc57120e6dc63acd09b7c3666ff250af903e8569b8a281df735632",
    title: "Ocean Room 200€/nuitée",
    message:
      "Venez vous immerger dans le coquillage de l'amour. Profitez d'un confort total.",
  },
  {
    id: 4,
    url: "https://img.freepik.com/vecteurs-libre/aquarium-sous-eau-corail-echelle_1308-14481.jpg?w=1380&t=st=1683815465~exp=1683816065~hmac=d15ea9c378267e2831e12d8f0ae32557f5ce5b02a25ae9b3aadcbd42e8facf0a",
    title: "Ocean Room 200€/nuitée",
    message:
      "Venez vous immerger dans le coquillage de l'amour. Profitez d'un confort total.",
  },
];

function Locations() {
  const [locationsIndex, setLocationsIndex] = useState(0);

  return (
    <>
      <h2>Locations</h2>
      <div className="locations-container">
        {locationsIndex > 0 && (
          <button
            type="button"
            aria-label="previousBtn"
            className="previousBtn"
            onClick={() => {
              setLocationsIndex(locationsIndex - 1);
            }}
          />
        )}

        <img src={locations[locationsIndex].url} alt="location img" />
        <div className="text-container">
          <h3>{locations[locationsIndex].title}</h3>
          <p>{locations[locationsIndex].message}</p>
        </div>

        {locationsIndex < locations.length - 1 && (
          <button
            type="button"
            aria-label="nextBtn"
            className="nextBtn"
            onClick={() => {
              setLocationsIndex(locationsIndex + 1);
            }}
          />
        )}

        <button type="button" aria-label="addBtn" className="addBtn">
          ADD
        </button>
      </div>
    </>
  );
}

export default Locations;
