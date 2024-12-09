'use client';

import styles from './Features.module.css';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="SenVit Logo" className={styles.logoImage} />
          <span className={styles.logoText}>SenVit</span>
        </div>
        <nav className={styles.nav}>
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/data">Check your data</Link>
          <Link href="/features">Features</Link>
          <Link href="/news">News</Link>
          <Link href="/contactUs">Contact us</Link>
          <Link href="/profile" className={styles.profileLink}>Profile</Link>
        </nav>
      </header>

      {/* Main Section */}
      <main className={styles.main}>
        <h1 className={styles.title}>Features</h1>
        <div className={styles.content}>
          <div className={styles.column}>
            <ul>
              <li>Senvit: Monitoreo de la Salud de los Adultos Mayores a través de Sensores y Tecnología Móvil</li>
              <li>Aplicación Móvil</li>
              <li>Toma de glucosa entre otros</li>
            </ul>
          </div>
          <div className={styles.column}>
            <p>
              Senvit es un innovador proyecto de salud que utiliza sensores avanzados conectados a una aplicación móvil para monitorear diversos indicadores de salud en adultos mayores, con el objetivo de mejorar su bienestar y facilitar la gestión de condiciones crónicas.
              <br /><br />
              La aplicación recopila datos en tiempo real de sensores que miden parámetros esenciales como los niveles de glucosa, presión arterial, frecuencia cardíaca, entre otros.
            </p>
          </div>
          <div className={styles.column}>
            <p>
              ¿Cómo Funciona Senvit?
              <br /><br />
              Los sensores de Senvit están diseñados para ser fáciles de usar y no invasivos. Estos dispositivos se colocan en puntos estratégicos del cuerpo del adulto mayor y se conectan automáticamente a la aplicación móvil de Senvit, la cual, a través de una interfaz amigable, permite visualizar los datos en tiempo real.
              <br /><br />
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.linksSection}>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#features">Features</Link>
            <Link href="#contact">Contact us</Link>
          </div>
          <div className={styles.linksSection}>
            <Link href="#faq">FAQ</Link>
            <Link href="#privacy">Privacy</Link>
          </div>
          <div className={styles.newsletterSection}>
            <p>Get our newsletter</p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.newsletterInput}
              />
              <button type="submit" className={styles.newsletterButton}>
                Subscribe
              </button>
            </form>
          </div>
          <div className={styles.socialLinks}>
            <Link href="#facebook">📘</Link>
            <Link href="#instagram">📸</Link>
            <Link href="#snapchat">👻</Link>
            <Link href="#twitter">🐦</Link>
            <Link href="#youtube">▶️</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
