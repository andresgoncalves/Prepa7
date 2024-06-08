import { Link } from 'react-router-dom';
import { useContador } from './hooks/contador';
import { useContext } from 'react';
import { NuevoContext } from './NuevoContexto';

export default function Home({ titulo }) {
  const { count, incrementar } = useContext(NuevoContext);

  return (
    <>
      <h1>{JSON.stringify(count)}</h1>
      <div>Chao mundo!</div>
      <button onClick={() => incrementar()}>Subir</button>
      <a href="/cards">Pagina de cards</a>
    </>
  );
}
