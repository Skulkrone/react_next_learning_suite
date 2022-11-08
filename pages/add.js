import React, { useRef } from "react";

export default function Add() {
  const enWord = useRef();
  const frWord = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWord = {
      en: enWord.current.value,
      fr: frWord.current.value,
    };

    // Requête HTTP :
    // on fait notre appel
    fetch("api/vocapi", {
      method: "POST",
      // transformer notre objet JS en JSON avec stringify
      body: JSON.stringify(newWord),
      headers: {
        "Content-Type": "application/json",
      },
    })
      // puis on reçoit une réponse :
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data);
      });

    // Pour vider le formulaire :
    enWord.current.value = "";
    frWord.current.value = "";
  };

  return (
    <div className="container p-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="addEn" className="form-label">
          Ajouter un mot en Anglais
        </label>
        <input ref={enWord} type="text" className="form-control" id="addEn" />

        <label htmlFor="addFr" className="form-label">
          Ajouter un mot en Français
        </label>
        <input ref={frWord} type="text" className="form-control" id="addFr" />

        <button className="btn btn-primary mt-4">Ajouter</button>
      </form>
    </div>
  );
}
