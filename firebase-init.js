// firebase-init.js

// 1. Импортируем нужные функции именно твоей версии (12.10.0)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

// 2. Твои ключи
const firebaseConfig = {
    apiKey: "AIzaSyA4RNk381OicVyF6eipv9UoA6x_-MP8cEU",
    authDomain: "pizzavote2025.firebaseapp.com",
    projectId: "pizzavote2025",
    storageBucket: "pizzavote2025.firebasestorage.app",
    messagingSenderId: "52096034603",
    appId: "1:52096034603:web:bc28851e024cb803dd476e"
};

// 3. Запускаем Firebase и Базу Данных (Firestore)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 4. Экспортируем db, чтобы index.html и admin.html могли сохранять и читать голоса
export { db };