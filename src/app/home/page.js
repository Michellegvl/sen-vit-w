'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
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
          <Link href="/userProfile" >Profile</Link>
          <button className={styles.contactButton}>Contact us</button>
        
         
        </nav>
        <div className={styles.userAccount}>
          <span>User account</span>
          <img src="/user-icon.svg" alt="User Icon" className={styles.userIcon} />
        </div>
      </header>

      {/* Main Section */}
      <main className={styles.main}>
        <h1 className={styles.mainTitle}>What is SenVit?</h1>
        <div className={styles.videoPlaceholder}>
          <div className={styles.videoPlayButton}>
            <span className={styles.playIcon}>▶</span>
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
