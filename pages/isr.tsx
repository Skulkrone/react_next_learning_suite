import React from "react";

export default function contact(props:any) {
  console.log(props);

  return (
    <div>
      <h1>{props.data.quotes[0].text}</h1>
    </div>
  );
}
// ISR : Incremantic Static Generation : création statique qui va être incrémentale suivant un temp donné

export async function getStaticProps() {
  const quote = await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1");
  const data = await quote.json();

  return {
    props: {
      data,
    },
    // si on veut montrer une nouvelle citation, au bout de 20s par exemple
    // pour voir l'effet quand on dev, faire un npm run build puis npm run start
    revalidate: 20
  };
}

// https://goquotes-api.herokuapp.com/api/v1/random?count=1
