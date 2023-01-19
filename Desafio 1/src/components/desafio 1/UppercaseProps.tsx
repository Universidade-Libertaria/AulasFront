import styles from "./uppercaseProps.module.scss";

//? Para fazer em JS, lembre que não precisa usar a interface ou type,
//? basta usar props e, nesse caso, props.texto na hora de selecionar
interface UppercaseProps {
  texto: string;
}
export function UppercaseProps({ texto }: UppercaseProps) {
  /* const textoUpperCase = texto.toUpperCase(); */
  return <h2 className={styles.wrapper}>{texto.toUpperCase()}</h2>;
}
