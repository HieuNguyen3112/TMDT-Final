<<<<<<< HEAD
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, get, update, child, remove } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDDOUEj5ZXHt_TvN10dbyj5Yg3xX1T5fus",
    authDomain: "demosoftwaretechnology.firebaseapp.com",
    databaseURL: "https://demosoftwaretechnology-default-rtdb.firebaseio.com",
    projectId: "demosoftwaretechnology",
    storageBucket: "demosoftwaretechnology.appspot.com",
    messagingSenderId: "375046175781",
    appId: "1:375046175781:web:0d1bfac1b8ca71234293cc",
    measurementId: "G-120GXQ1F6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

class FirebaseService {
    static getAuth() {
        return auth;
    }

    static getDatabase() {
        return db;
    }

    static getRef(path) {
        return ref(db, path);
    }

    static async getData(ref) {
        return await get(ref);
    }

    static async updateData(ref, data) {
        return await update(ref, data);
    }

    static removeData(ref) {
        return remove(ref);
    }

    static onAuthStateChanged(callback) {
        onAuthStateChanged(auth, callback);
    }
}

export default FirebaseService;
=======
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// import { getDatabase, ref, get, update, child, remove } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyDDOUEj5ZXHt_TvN10dbyj5Yg3xX1T5fus",
//     authDomain: "demosoftwaretechnology.firebaseapp.com",
//     databaseURL: "https://demosoftwaretechnology-default-rtdb.firebaseio.com",
//     projectId: "demosoftwaretechnology",
//     storageBucket: "demosoftwaretechnology.appspot.com",
//     messagingSenderId: "375046175781",
//     appId: "1:375046175781:web:0d1bfac1b8ca71234293cc",
//     measurementId: "G-120GXQ1F6L"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getDatabase(app);

// class FirebaseService {
//     static getAuth() {
//         return auth;
//     }

//     static getDatabase() {
//         return db;
//     }

//     static getRef(path) {
//         return ref(db, path);
//     }

//     static async getData(ref) {
//         try {
//             const snapshot = await get(ref);
//             return snapshot;
//         } catch (error) {
//             console.error("firebaseService Error getting data:", error);
//             throw error;
//         }
//     }

//     static async updateData(ref, data) {
//         try {
//             await update(ref, data);
//         } catch (error) {
//             console.error("firebaseService Error updating data:", error);
//             throw error;
//         }
//     }

//     static async removeData(ref) {
//         try {
//             await remove(ref);
//         } catch (error) {
//             console.error("firebaseService Error removing data:", error);
//             throw error;
//         }
//     }

//     static onAuthStateChanged(callback) {
//         onAuthStateChanged(auth, callback);
//     }
// }

// export default FirebaseService;

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, get, update, remove, set, child, push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDDOUEj5ZXHt_TvN10dbyj5Yg3xX1T5fus",
    authDomain: "demosoftwaretechnology.firebaseapp.com",
    databaseURL: "https://demosoftwaretechnology-default-rtdb.firebaseio.com",
    projectId: "demosoftwaretechnology",
    storageBucket: "demosoftwaretechnology.appspot.com",
    messagingSenderId: "375046175781",
    appId: "1:375046175781:web:0d1bfac1b8ca71234293cc",
    measurementId: "G-120GXQ1F6L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

class FirebaseService {
    static getAuth() {
        return auth;
    }

    static getDatabase() {
        return db;
    }

    static getRef(path) {
        return ref(db, path);
    }

    static async getData(ref) {
        return await get(ref);
    }

    static async updateData(ref, data) {
        return await update(ref, data);
    }

    static async removeData(ref) {
        return await remove(ref);
    }

    static async setData(ref, data) {
        return await set(ref, data);
    }

    static async pushData(ref, data) {
        const newRef = push(ref);
        return await set(newRef, data);
    }

    static onAuthStateChanged(callback) {
        onAuthStateChanged(auth, callback);
    }
}

export default FirebaseService;
>>>>>>> 49cc1583c4dfc8069932a0aca774422502d99b1e