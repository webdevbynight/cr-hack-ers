import { PropTypes } from "prop-types";

function ButtonValide({ handleTest, isOpen }) {
  const openForm = () => handleTest();
  return (
    <div className="btn-valid">
      <button type="button" className="buttonValide" onClick={openForm}>
        Valider ma commande
      </button>
      {isOpen && (
        <div className="modal-shadow">
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
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

ButtonValide.propTypes = {
  handleTest: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
export default ButtonValide;
