import styles from "../styles/Home.module.css";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";

export default function Home(props: any) {
  console.log(props);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Titre</title>
      </Head>
      <div className={styles.main}>
        <h1 className={styles.titre}>Vocabulaire de base !</h1>
        <table className={styles.tableau}>
          <tbody>
            {/* mettre des accolades n'induit pas le return de la fonction fléchée, il faut donc l'écrire
                les espaces induisent bien ce return
            */}
            {props.array.map((el: any) => (
              <tr key={uuidv4()}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// comment créer page statique :
// en 1er on apprend getStaticProps
// objet data = représente données pour site d'apprentissage d'une langue
// Appeler données depuis API ou BDD
// await lorsque async
// tjs faire un return dans cette fonction avec objet qui doit s'appeler props
// qd tableau, au lieu de mettre array: array, on peut juste mettre le raccourci array

export async function getStaticProps() {
  const data = await import(`../data/vocabulary.json`);
  const array = data.vocabulary;

  // "Pensez à vider l'objet dans dossier data"
  // pour renvoyer une erreur 404 :

  // if(array.length === 0){
  //   return{
  //     notFound: true
  //   }
  // }

  // Pour faire une redirection :

  // if(array.length === 0){
  //   return{
  //     redirect: {
  //       destination: "/isr"
  //     }
  //   }
  // }

  return {
    props: {
      array,
    },
  };
}
