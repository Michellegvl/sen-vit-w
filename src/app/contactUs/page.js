'use client';

import styles from './Contact.module.css';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactUs() {
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
        <h1 className={styles.title}>We are here to hear you </h1>
        
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon} />
            <p>800 024 0384 Ext. 2025</p>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <p>Senvit@gmail.com</p>
          </div>
          <div className={styles.contactItem}>
            <FaWhatsapp className={styles.icon} />
            <p>800 024 0384 Ext. 2025</p>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <p>Dirección: Av. Adolfo López Mateos Ote. 1801, Bona Gens, 20256, Aguascalientes, Ags.</p>
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
