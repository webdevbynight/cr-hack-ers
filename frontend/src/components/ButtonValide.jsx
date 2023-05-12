import { useState } from "react";

function ButtonValide() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(!isOpen);
  return (
    <div className="btn-valid">
      <button type="button" className="buttonValide" onClick={openModal}>
        Valider ma commande
      </button>
      {isOpen && (
        <div className="modal-shadow">
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <button type="submit" className="close" onClick={openModal}>
                  &times;
                </button>
                <h2>Félicitations</h2>
              </div>
              <div className="modal-body">
                <p>Votre voyage a bien été pris en compte</p>
              </div>
              <div className="modal-footer">
                <h3>A très bientot </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ButtonValide;
