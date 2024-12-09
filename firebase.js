// Importar Firebase y los módulos necesarios
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importar Firebase Authentication

// Configuración de Firebase (usa la tuya)
const firebaseConfig = {
  apiKey: "AIzaSyBhz6eL9trgX7AnLUoQ9mGKFPCBnKMb5aE",
  authDomain: "senvit-f4fe8.firebaseapp.com",
  projectId: "senvit-f4fe8",
  storageBucket: "senvit-f4fe8.firebasestorage.app",
  messagingSenderId: "776284600363",
  appId: "1:776284600363:web:d9e6ba6ff5045ac383926e",
  measurementId: "G-XTDYQSPGGD",
};

// Inicializar la app de Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firebase Authentication
export const auth = getAuth(app); // Exportar `auth` para usarlo en login/registro

// Exportar la app si necesitas usarla en otros lugares (opcional)
export default app;
