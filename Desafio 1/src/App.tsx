import styles from "./App.module.scss";
import { UppercaseProps } from "./components/desafio 1/UppercaseProps";
import { Bold } from "./components/desafio 2/Bold";
import { Count } from "./components/desafio 3/Count";

function App() {
  return (
    <>
      <header className={styles.header}>
        <a href='#início'>Início</a>
      </header>
      <div className={styles.wrapper} id='início'>
        <h1>Desafios front em TypeScript</h1>
        <div className={styles.buttonsContainer}>
          <a href='#desafio 1'>Desafio 1</a>
          <a href='#desafio 2'>Desafio 2</a>
          <a href='#desafio 3'>Desafio 3</a>
        </div>
      </div>
      <section id='desafio 1'>
        <UppercaseProps texto='Texto de teste - Desafio 1' />
      </section>
      <section id='desafio 2'>
        <Bold>Texto de Teste - Desafio 2</Bold>
      </section>
      <section id='desafio 3'>
        <Count num={4} />
      </section>
    </>
  );
}

export default App;
