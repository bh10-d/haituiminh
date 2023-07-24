//hieu
import { getData, clickImageNew } from "./imagegrid.js";

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
import { getStorage, ref, getDownloadURL, listAll, list  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";

// const db = getDatabase();
// const storage = getStorage();


// console.log(ref(storage, 'videos'))

let getListImageFireBase = [];

function getDataImage(){
    const storage = getStorage();
    list(ref(storage, 'hieuthao')) //list or listAll
    .then((url)=>{
        // getListImageFireBase = url.items.map((m)=>{m})
        getListImageFireBase = Object.entries(url).map(entry => entry[1])[1].map(m=>m._location.path);
        // console.log(url)
        // console.log(typeof url)
        // console.log(getListImageFireBase[1].map(m=>m._location.path))
        // console.log(getListImageFireBase)
        // return getListImageFireBase
        for(let i = 0; i < getListImageFireBase.length; i++) {
            getURLImage(getListImageFireBase[i])
        }
    })
    // console.log(getListImageFireBase)
}

function getURLImage(path) {
    const storage = getStorage();
    
    getDownloadURL(ref(storage, path))
    .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
        const blob = xhr.response;
        };
        xhr.open('GET', url);
        // xhr.send();

        // console.log(url)
        // Or inserted into an <img> element || example
        // const img = document.getElementById('test');
        // img.setAttribute('src', url);

        const div = document.getElementById('container');
        // div.innerHTML += `<div class="color1" ><img src="${url}" alt=""></div>`;

        const divImg = document.createElement('div');
        const img = document.createElement('img');
        divImg.className = 'color1';
        divImg.onclick = (e) => {clickImageNew(e)}
        img.src = url;
        div.appendChild(divImg);
        divImg.appendChild(img);
        

        //dom ảo
        // const divImg = document.createElement('div');
        // const img = document.createElement('img');
        // div.appendChild(divImg);
        // divImg.className="color1";
        // img.setAttribute('src', url)
        // divImg.appendChild(img);
    })
    .catch((error) => {
        // Handle any errors
    });
    getData(path)
}

function getdataonce(){
    // const storage = getStorage();
    
    getDataImage();
    
    
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