'use client';
import { useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";


export default function PerfilProgramador() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`${styles.page} ${styles[theme]}`}>
      <header className={styles.header}>
        <button
          className={`${styles.themeBtn} ${styles.iconBtn}`}
          onClick={() => setTheme("light")}
          aria-label="Tema claro"
        >
          🌞
        </button>
        <button
          className={`${styles.themeBtn} ${styles.iconBtn}`}
          onClick={() => setTheme("dark")}
          aria-label="Tema escuro"
        >
          🌙
        </button>
      </header>
      <main className={styles.main}>
        <div className={styles.flexContainer}>
          <div className={styles.container}>
          
          <Image
              
              src="/pollyanna.jpg"
              alt="pollyanna"
              width={280}
              height={280}
              className={styles.logo}
              priority
            />
             <h1 className={styles.title}>Desenvolvedora e Analista de Sistemas</h1>
        <p className={styles.description}>
         <span> Sou apaixonada por tecnologia e programação!</span> <br /><br />
          Sou uma profissional determinada e otimista, com um forte senso de propósito que aplico diretamente em meus projetos.
          Encaro os desafios não apenas com coragem, mas com a convicção de que soluções inovadoras nascem da colaboração e de
          uma visão positiva. Meu foco principal é contribuir ativamente para um ambiente de equipe justo e acolhedor, onde a felicidade 
          e o bem-estar se traduzem em alta performance e resultados de sucesso.<br /><br />
          Tenho experiência com desenvolvimento web e mobile, gosto de desafios e acredito que a programação pode transformar vidas e negócios.<br /><br />
          Estou sempre em busca de evolução profissional e pessoal!<br />
       
       <span> Experiências com linguagens de programação:</span><br />
        HTML,CSS,React,Php,Python,Vue.js e JavaScript.<br />
        <span>Front-end :</span> Desenvolvo interface com a qual o usuário interage em um site, aplicação web ou aplicativo. <br />
       <span> Back-end:</span> Manualização de Banco de Dados, API,Modelagem de Dados.<br />
       <span> Ensino-Superior:</span><br />
        Análise e Desenvolvimento de Sistemas <br /><br />
        </p>
        <Link href="/" className={styles.linkPerfil}>
          Voltar para página inicial
        </Link>
      </div>
      </div>
      </main>
    </div>
    
  );
}