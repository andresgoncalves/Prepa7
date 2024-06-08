import styles from './Card.module.css';

export default function Card({ nombre, apellido }) {
  return (
    <div className={styles.contenedor}>
      <div className={styles.nombre}>{nombre}</div>
      <div className={styles.apellido}>{apellido}</div>
    </div>
  );
}
