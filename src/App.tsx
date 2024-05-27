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
      <main className={styles.main}>
        <div className={styles.textao}>
          <h1 className={styles.font}>Uma boa saúde começa com o que você
            <span className={styles.come}> Come</span>
          </h1>
          <p className={styles.fontP}>Quer comer com mais atenção? Acompanhe as refeições, 
            conheça seus hábitos e alcance seus obetivos com 
            <span className={styles.come}> FitCalBack</span>.
            </p>
        </div>
      </main>
    </>

  );
}

export default App;
