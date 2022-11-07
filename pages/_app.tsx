import "../styles/globals.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from "next/app";
import Container from "../components/Container/Container";

// Component = créer les pages de l'application
// pageProps = les données que ces différentes pages auront besoin ou pas

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
