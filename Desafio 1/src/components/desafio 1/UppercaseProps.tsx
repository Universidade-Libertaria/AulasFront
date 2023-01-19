import styles from "./uppercaseProps.module.scss";

interface UppercaseProps {
  texto: string;
}
export function UppercaseProps({ texto }: UppercaseProps) {
  const textoUpperCase = texto.toUpperCase();
  return <h2 className={styles.wrapper}>{textoUpperCase}</h2>;
}
