'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase'; // Ajusta la ruta según la ubicación de tu archivo firebase.js
import styles from './register.module.css';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Registro del usuario en Firebase Authentication
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Account created successfully!');
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError(err.message); // Muestra el mensaje de error proporcionado por Firebase
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create your account</h1>
      <form className={styles.form} onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          className={styles.input}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          className={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}
