'use client';

import { useState } from 'react';
import styles from './UserProfile.module.css';
import Link from 'next/link';

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    name: 'John Doe',
    address: '123 Main St, New York, NY',
    family: 'Jane Doe',
    physician: 'Dr. Smith',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

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
          <Link href="/profile">Profile</Link>
        </nav>
        <div className={styles.userAccount}>
          <span>User account</span>
          <img src="https://th.bing.com/th/id/OIP.96G9anyAUgCmrMaAh5sy3gHaE8?rs=1&pid=ImgDetMain" alt="User Icon" className={styles.userIcon} />
        </div>
      </header>

      {/* Main Section */}
      <main className={styles.main}>
        <div className={styles.profileContainer}>
          {/* Foto del Usuario */}
          <div className={styles.avatarSection}>
            <img
              src="https://th.bing.com/th/id/OIP.96G9anyAUgCmrMaAh5sy3gHaE8?rs=1&pid=ImgDetMain"
              alt="User Avatar"
              className={styles.avatar}
            />
            <h2 className={styles.userName}>{userData.name}</h2>
            <button className={styles.editPhoto}>Load Photo</button>
          </div>

          {/* Información del Usuario */}
          <div className={styles.infoSection}>
            <h3 className={styles.infoTitle}>Personal Information</h3>
            <table className={styles.infoTable}>
              <tbody>
                <tr>
                  <td className={styles.infoLabel}>Full Name:</td>
                  <td>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                        className={styles.input}
                      />
                    ) : (
                      userData.name
                    )}
                  </td>
                </tr>
                <tr>
                  <td className={styles.infoLabel}>Address:</td>
                  <td>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        value={userData.address}
                        onChange={handleInputChange}
                        className={styles.input}
                      />
                    ) : (
                      userData.address
                    )}
                  </td>
                </tr>
                <tr>
                  <td className={styles.infoLabel}>Family:</td>
                  <td>
                    {isEditing ? (
                      <input
                        type="text"
                        name="family"
                        value={userData.family}
                        onChange={handleInputChange}
                        className={styles.input}
                      />
                    ) : (
                      userData.family
                    )}
                  </td>
                </tr>
                <tr>
                  <td className={styles.infoLabel}>Physician:</td>
                  <td>
                    {isEditing ? (
                      <input
                        type="text"
                        name="physician"
                        value={userData.physician}
                        onChange={handleInputChange}
                        className={styles.input}
                      />
                    ) : (
                      userData.physician
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <button className={styles.button} onClick={toggleEdit}>
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <ul>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/contactUs">Contact us</Link></li>
          </ul>
        </div>
        <div className={styles.footerMiddle}>
          <p>Get our newsletter</p>
          <form>
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
        <div className={styles.footerRight}>
          <Link href="#facebook">📘</Link>
          <Link href="#instagram">📸</Link>
          <Link href="#snapchat">👻</Link>
          <Link href="#twitter">🐦</Link>
          <Link href="#youtube">▶️</Link>
        </div>
      </footer>
    </div>
  );
}
