// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtnggnLxqL2ldriWE0N7SSPW9b--2qPWI",
    authDomain: "chatapp-3714d.firebaseapp.com",
    databaseURL: "https://chatapp-3714d-default-rtdb.firebaseio.com",
    projectId: "chatapp-3714d",
    storageBucket: "chatapp-3714d.appspot.com",
    messagingSenderId: "50177120322",
    appId: "1:50177120322:web:752636dd7a024911fef5db",
    measurementId: "G-CYN4W9DCNS"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase,  child, onValue, get } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js"
import { getStorage, ref, getDownloadURL, listAll  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";

// const db = getDatabase();
const storage = getStorage();


// console.log(ref(storage, 'videos'))


//lay link ve thanh cong
function getdataonce(){
    const storage = getStorage();
    // console.log(storage)
    listAll(ref(storage, 'images'))
    .then((url)=>{
         // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
        const blob = xhr.response;
        };
        xhr.open('GET', url);
        // xhr.send();

        console.log(url)
    })
    // getDownloadURL(ref(storage, 'images/1.jpg'))
    // .then((url) => {
    //     // `url` is the download URL for 'images/stars.jpg'

    //     // This can be downloaded directly:
    //     const xhr = new XMLHttpRequest();
    //     xhr.responseType = 'blob';
    //     xhr.onload = (event) => {
    //     const blob = xhr.response;
    //     };
    //     xhr.open('GET', url);
    //     // xhr.send();

    //     console.log(url)
    //     // Or inserted into an <img> element
    //     const img = document.getElementById('test');
    //     img.setAttribute('src', url);
    // })
    // .catch((error) => {
    //     // Handle any errors
    // });
}

window.onload = getdataonce

/* tham khao

https://modularfirebase.web.app/reference/storage/
https://blog.back4app.com/firebase-storage/
https://firebase.blog/posts/2016/07/5-tips-for-firebase-storage/
*/