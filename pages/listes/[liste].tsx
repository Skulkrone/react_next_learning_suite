import React from "react";
import styles from "../../styles/Home.module.css";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export default function Liste(props: any) {
  // console.log(props);

  const router = useRouter();
  // console.log(typeof router.query.liste);

  // si Fallback = true qd affichage meilleur page
  if (!props.listeEnCours) {
    return <h1>Chargement</h1>;
  }
  
  const str = router.query.liste as string;

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.titre}>
          {str.charAt(0).toUpperCase() +
            str.slice(1)}
          {/* {router.query.liste} */}
        </h1>
        <table className={styles.tableau}>
          <tbody>
            {props.listeEnCours.map((el: any) => (
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

// Dès qu'on a des chemins dynamiques, on doit utiliser getStaticPaths & getStaticProps :

export async function getStaticProps(context: any) {
  //on accès au context quand on utilise getStaticPaths pour pouvoir retrouver le nom de la page et ainsi faire appel à la BDD pour avoir les bonnes données
  const slug = context.params.liste;
  const data = await import("../../data/listes.json");

  // console.log("Le SLUG " + slug + "!!!!", data);

  const listeEnCours = data.englishList.find((list) => list.name === slug);

  if (!listeEnCours) {
    return {
      NotFound: true,
    };
  }

  return {
    props: {
      listeEnCours: listeEnCours?.data,
    },
  };
}

// getStaticPaths sert à donner à Next le nb de chemin qu'on a pour créer le nb de page qu'on a envie d'avoir
export async function getStaticPaths() {
  const data = await import("../../data/listes.json");

  // pour compléter tableau de params => extraire un tableau depuis listes.json qui contriendait tous les noms qu'on a envie de retrouver
  const paths = data.englishList.map((item:any) => ({
    params: { liste: item.name },
  }));

  // on retourne tjs un ojet avec 1 propriété "paths" qui sera un tableau et dans celui on envoie un objet avec la propriété "params" qui sera lui-même un objet
  // ici "liste" fait référence qu chemin dynamique, ça doit être Exactement le même
  return {
    // paths: [{ params: { liste: "words" } }],
    // si on arrive sur un page inexistante, la propriété fallback renvoie une 404 (obligatoire de mettre un fallback) => false
    // paths,
    // fallback: false,
    // fallback => true : pour montrer les meilleurs pages d'un site par exemple
    paths: [{ params: { liste: "words" } }, { params: { liste: "verbs" } }],
    fallback: true,
    // Si on veut directement faire directement côté serveur :
    // fallback: "blocking",
  };
}
