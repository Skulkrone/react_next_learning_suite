import React from "react";

export default function cours(props:any) {
  console.log(props);
  
  return (
    <div>
      <h1 className="text-center my-2">Le BTC est à : {props.results.bpi.EUR.rate} €</h1>
    </div>
  );
}

// Créer des pages avec un rendu côté serveur

export async function getServerSideProps(context: any) {

  // console.log(context);
  
// pas besoin de getStaticPaths car tout va être créer au niveau du serveur
  const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const results = await data.json();

  return {
    props: {
      results,
    },
  };
}

// https://api.coindesk.com/v1/bpi/currentprice.json
