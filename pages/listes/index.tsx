import React from "react";
import Head from "next/head";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function index(props: any) {
  // console.log(props.array.forEach((item:any) => console.log(Object.keys(item)[0])));

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Listes de Vocabulaire</title>
      </Head>

      <div className="container">
        <h1 className="my-4">Les listes de Vocabulaire</h1>

        <ul className="list-group">
          {props.array.map((item: any) => (
            <li key={uuidv4()} className="list-group-item">
              {/* Avec ancienne version fichier listes.json */}
              {/* <Link href={`/listes/${Object.keys(item)[0]}`}>{Object.keys(item)[0]}</Link> */}
              <Link href={`/listes/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`../../data/listes.json`);
  const array = data.englishList;

  return {
    props: {
      array,
    },
  };
}
