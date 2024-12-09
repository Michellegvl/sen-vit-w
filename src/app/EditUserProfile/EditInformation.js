import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EditInformation.module.css';

export default function EditInformation({ userData, setUserData }) {
  const [formData, setFormData] = useState(userData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData); // Actualiza los datos en el estado global
    navigate('/'); // Regresa a la pantalla de perfil
  };

  return (
    <div className={styles.container}>
      <h1>Edit Information</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Family:
          <input
            type="text"
            name="family"
            value={formData.family}
            onChange={handleChange}
          />
        </label>
        <label>
          Physician Associate:
          <input
            type="text"
            name="physician"
            value={formData.physician}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={styles.saveButton}>
          Save Changes
        </button>
      </form>
    </div>
  );
}
