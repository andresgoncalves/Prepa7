import { Link } from 'react-router-dom';
import Card from './Card';
import { useContador } from './hooks/contador';
import { useContext } from 'react';
import { NuevoContext } from './NuevoContexto';

export default function CardsPage({ titulo }) {
  const { count, incrementar } = useContext(NuevoContext);

  return (
    <>
      {count}
      <Card nombre="Andres" apellido="Goncalves" />
      <Card nombre="Andres2" apellido="Goncalves2" />
      <Link to="/">Pagina de inicio</Link>
    </>
  );
}
