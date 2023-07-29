//hieu
import { getData, clickImageNew } from "../js/imagegrid.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getDatabase,  child, onValue, get } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js"
import { getStorage, ref, getDownloadURL, listAll, list, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";
import { getFirestore, getDocs, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"
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
const db = getFirestore(app);
const storage = getStorage();

// const db = getDatabase();

// console.log(ref(storage, 'videos'))

// comment tu day
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
//den day

window.onload = getdataonce


//test

// const imageRef = ref(storage, 'images/' + file.name);
// uploadBytesResumable(imageRef, file, metadata)
//   .then((snapshot) => {
//     console.log('Uploaded', snapshot.totalBytes, 'bytes.');
//     console.log('File metadata:', snapshot.metadata);
//     // Let's get a download URL for the file.
//     getDownloadURL(snapshot.ref).then((url) => {
//       console.log('File available at', url);
//       // ...
//     });
//   }).catch((error) => {
//     console.error('Upload failed', error);
//     // ...
//   });

//end test


const querySnapshot = await getDocs(collection(db, "hieuthaohtml"));
function getDataFromFireBase(){
    let dataArray = [];
    querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data().content}`);//doc.data()
    //   console.log(doc.data());
        dataArray.push(doc.data());
    });
    return dataArray;
}

export {
        getDatabase,
        child,
        onValue,
        get,
        storage,
        ref,
        getDownloadURL,
        listAll,
        list,
        getFirestore, 
        db, 
        getDocs,
        collection,
        addDoc,
        getDataFromFireBase,
        uploadBytesResumable
    }


/* tham khao

https://modularfirebase.web.app/reference/storage/
https://blog.back4app.com/firebase-storage/
https://firebase.blog/posts/2016/07/5-tips-for-firebase-storage/
*/