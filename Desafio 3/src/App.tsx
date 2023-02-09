import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./App.css";

export default function App() {
  const [text] = useTypewriter({
    words: ["TEXTO 1", "TEXTO 2", "<TEXTO 3 />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='wrapper'>
      <header className='container'>
        <motion.div
          className='logo_container'
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <p>LOGO</p>
          <p>NOME</p>
        </motion.div>
        <motion.nav
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <ul className='nav_container'>
            <li>Home</li>
            <li>Produtos</li>
            <li>Contato</li>
          </ul>
        </motion.nav>
      </header>
      <section className='main_container'>
        <div className='text_container'>
          <p>{text}</p>
          <Cursor cursorColor='#F7AB0A' />
        </div>
        <main className='main'>
          <motion.div
            className='cima'
            initial={{ y: -500, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              in? Hic ad tenetur pariatur laboriosam quos voluptatem eligendi
              incidunt, sit architecto sapiente tempora nisi porro vero iste.
              Atque, recusandae adipisci.
            </p>
          </motion.div>
          <motion.div
            className='baixo'
            initial={{ y: 500, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 2.5 }}
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              in? Hic ad tenetur pariatur laboriosam quos voluptatem eligendi
              incidunt, sit architecto sapiente tempora nisi porro vero iste.
              Atque, recusandae adipisci.
            </p>
          </motion.div>
        </main>
      </section>
    </div>
  );
}
