'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importar useRouter
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Asegúrate de usar la ruta correcta
import styles from './page.module.css';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter(); // Inicializar useRouter

  // Función para manejar el inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Iniciar sesión en Firebase
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess('Login successful!');

      // Redirigir al usuario a la pantalla principal
      router.push('/home'); // Cambia '/home' a la ruta real de tu página principal
    } catch (err) {
      setError('Invalid email or password.');
    }
  };

  // Función para abrir el formulario de registro en una ventana emergente
  const openRegisterPopup = () => {
    const popupWidth = 400;
    const popupHeight = 600;

    const left = (window.innerWidth - popupWidth) / 2;
    const top = (window.innerHeight - popupHeight) / 2;

    // Configuramos la ventana emergente con dimensiones y opciones específicas
    window.open(
      '/register', // Ruta del formulario de registro
      'Register',
      `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=no,scrollbars=no,status=no`
    );
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/globe.svg" alt="SenVit Logo" className={styles.logoImage} />
          <span className={styles.logoText}>SenVit</span>
        </div>
        <nav className={styles.nav}>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#privacy">Privacy Policy</Link>
          <Link href="#data">Check your data</Link>
          <Link href="#features">Features</Link>
          <Link href="#news">News</Link>
          <Link href="#contact">Contact us</Link>
          <Link href="/profile" className={styles.profileLink}>
            Profile
          </Link>
          <input type="text" placeholder="Search" className={styles.search} />
        </nav>
      </header>

      {/* Main Section */}
      <main className={styles.main}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>
            Already have an account? <br /> <span>Sign in</span>
          </h1>
          <p className={styles.subtitle}>Stay informed for long-lasting health</p>
          <form className={styles.form} onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>{success}</p>}
            <button type="submit" className={styles.button}>Sign in</button>
          </form>
          <div className={styles.links}>
            {/* Botón que abre la ventana emergente */}
            <button className={styles.linkButton} onClick={openRegisterPopup}>
              Still no account? Register here
            </button>
            <Link href="/forgot-password">Forgot your password? Click here</Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <div>
              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#features">Features</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#contact">Contact us</Link>
            </div>
            <div>
              <Link href="#blog">Blog</Link>
              <Link href="#search">Search</Link>
              <Link href="#terms">T & Cs</Link>
              <Link href="#privacy">Privacy</Link>
              <Link href="#community">Community</Link>
            </div>
          </div>
          <div className={styles.newsletter}>
            <p>Get our newsletter</p>
            <form>
              <input type="email" placeholder="Enter your email" className={styles.newsletterInput} />
              <button type="submit" className={styles.newsletterButton}>Subscribe</button>
            </form>
          </div>
          <div className={styles.social}>
            <Link href="#facebook">📘</Link>
            <Link href="#instagram">📸</Link>
            <Link href="#snapchat">👻</Link>
            <Link href="#youtube">▶️</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
