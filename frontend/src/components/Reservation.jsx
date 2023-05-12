import { useState } from "react";

function Reservation() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [Nbr, setNbr] = useState("");

  const [changeClass, setChangeClass] = useState("send-form-off");
  const disable = document.getElementById("button_Contact");

  return (
    <div className="contact-page">
      <form className="contact-form" id="my_Form">
        <h1 className="h1-Contact">Contactez-nous</h1>
        <label>
          <p>
            Prénom <span className="obligatoire">*</span>
          </p>
          <input
            id="first_Name"
            className="input"
            type="text"
            placeholder="Jules"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
        </label>
        <label>
          <p>
            Nom <span className="obligatoire">*</span>
          </p>
          <input
            id="last_Name"
            className="input"
            type="text"
            placeholder="Verne"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          <p>
            Nombre de voyageur <span className="obligatoire">*</span>
          </p>
          <select
            id="Nbr"
            className="input"
            type="number"
            value={Nbr}
            onChange={(e) => setNbr(e.target.value)}
            required
          >
            <option className="option" value="">
              --Choisir--
            </option>
            <option className="option" value="1">
              1
            </option>
            <option className="option" value="2">
              2
            </option>
            <option className="option" value="3">
              3
            </option>
            <option className="option" value="4">
              4
            </option>
          </select>
        </label>
        <label>
          <p>
            Email<span className="obligatoire">*</span>
          </p>
          <input
            id="email"
            className="input"
            type="email"
            placeholder="nemo@merbnb.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <p>
            Date de réservation <span className="obligatoire">*</span>
          </p>
          <input
            id="date"
            className="input"
            type="date"
            placeholder="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <textarea
          id="text_Area"
          className="textaera"
          placeholder="Saisissez votre message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />

        <button className="buttonContact" id="button_Contact" type="submit">
          Envoyer
        </button>

        <div id="send_Form" className={changeClass}>
          <div className="send-container">
            <button
              className="buttonSend"
              type="button"
              onClick={() => {
                setChangeClass("send-form-off");
                setFirstName("");
                setLastName("");
                setEmail("");
                setFirstName("");
                setMessage("");
                disable.disabled = false;
              }}
            >
              Test
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Reservation;
