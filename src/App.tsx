import React from 'react';
import styles from './App.module.css';
import Logo from './Assets/Icon/LogoFitCallBack.png'

function App() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
          <h2>FitCalBack</h2>
        </div>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <ul>
              <li><a href="#funcionalidades">Funcionalidades</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#projeto">O Projeto</a></li>
              <li><a href="#equipe">Equipe</a></li>
            </ul>
          </nav>
        </div>
        <button className={styles.button}>Get the App</button>
      </header>
    </>

  );
}

export default App;
