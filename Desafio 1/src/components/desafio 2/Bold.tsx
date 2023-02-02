import styles from "./bold.module.scss";

interface BoldProps {
  children: React.ReactNode;
}

export function Bold({ children }: BoldProps) {
  return <b className={styles.wrapper}>{children}</b>;
}
