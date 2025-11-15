'use client';
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'https://jxtxkjhxhfwbfnvndnsn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4dHhramh4aGZ3YmZudm5kbnNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMDg2NTksImV4cCI6MjA2OTg4NDY1OX0.Ena7YFxk8DAQ6HasCEpLStJB-wRTizrUoR9rWdqyhbs';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);

  async function buscarDados() {
    setLoading(true);
    const { data, error } = await supabase
      .from('dadospessoais')
      .select("nome,email, telefone, endereco,idade")
      .eq("id", 1)
      .single();
    setDados(data);
    setLoading(false);
  }

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
            <h1>Quem sou eu</h1>
            <Image
              className={styles.logo}
              src="/polly.jpg"
              alt="pollyanna"
              width={280}
              height={280}
              priority
            />
            <h1 className={styles.title}>Pollyanna dos Santos Souza</h1>
            <p className={styles.description}>
             "Guiada pela determinação e otimismo, demonstro minha força ao perseguir objetivos <br />
             e manter a resiliência. Atuo como agente de transformação e inspiração, utilizando <br />
             a bondade e a coragem como bússola na busca por um mundo mais justo e acolhedor.<br /> 
             Meu foco é catalisar a felicidade e o bem-estar coletivo, motivando as pessoas a<br />
              nunca abandonarem seus sonhos."
                
              </p>
          </div>
          <div className={styles.dadosContainer}>
            <button
              className={styles.dadosBtn}
              onClick={buscarDados}
              disabled={loading}
            >
              {loading ? "Carregando..." : "Dados pessoais"}
            </button>
            {dados && (
              <>
                <ul className={styles.dadosLista}>
                  <li><strong>Nome:</strong> {dados.nome}</li>
                  <li><strong>Email:</strong> {dados.email}</li>
                  <li><strong>Telefone:</strong> {dados.telefone}</li>
                  <li><strong>Endereço:</strong> {dados.endereco}</li>
                  <li><strong>Cidade: Mauá-SP</strong></li>
                  <li><strong>Idade: {dados.idade} </strong></li>
                </ul>
                <button
                  className={styles.fecharBtn}
                  onClick={() => setDados(null)}
                >
                  Fechar informações
                </button>
              </>
            )}
          </div>
          <Link href="/perfil-programador" className={styles.linkPerfil} >
Perfil Programador
</Link>
        </div>
      </main>
    </div>
  );
}