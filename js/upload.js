import { getDocs, collection, db, addDoc, getDataFromFireBase, ref, storage, uploadBytesResumable, getDownloadURL } from '../js/firebase.js';
import "https://cdn.ckeditor.com/ckeditor5/38.1.1/classic/ckeditor.js"; //CKeditor5 

let submit = document.getElementById('submit');
let date = document.getElementById('date');
let content = document.getElementById('content');
let myEditor;
let file = document.querySelector('#file');
let showImage = document.getElementById('showimage');
let g_date = new Date();
let month_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let dataPreviousImage = [];
let dataImage = [];

//text input
ClassicEditor
.create( document.querySelector( '#editor' ) )
.then((editor) =>{
    // console.log(editor)
    // editor.getData();

    myEditor = editor;
})
.catch( error => {
    console.error( error );
} );
// let submit = document.getElementById('submit');
document.querySelector( '#submit' ).addEventListener('click',()=>{
    const editorData = myEditor.getData();
    // console.log(editorData);
    // var data = ClassicEditor.instances.editor.getData();
    console.log(editorData);
})
//end text input

//get image
file.addEventListener("change", (event) => {
	const { files } = event.target;
    // dataImage.push(...dataPreviousImage, event.target.files[0]);
    console.log("files", files)
    for(let i = 0; i < event.target.files.length; i++) {
        showImage.innerHTML += `<img width="95%" height="100%" src="/image/${files[i].name}"/>`
        // uploadFile(event.target.files[i]);
        dataPreviousImage.push(event.target.files[i]);
    }
    console.log(dataImage, dataPreviousImage);
})

//end get image

function uploadFile(file) {
const storageRef = ref(storage, `hieuthao/${file.name}`);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on('state_changed', 
    (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
        case 'paused':
        console.log('Upload is paused');
        break;
        case 'running':
        console.log('Upload is running');
        break;
    }
    }, 
    (error) => {
    // Handle unsuccessful uploads
    }, 
    () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            dataImage.push(downloadURL);
            console.log('File available at', downloadURL);
            console.log(dataImage);
            if(dataImage.length == dataPreviousImage.length){
                let convertImg = '';
                for(let i = 0; i < dataImage.length; i++){
                    convertImg += `<img width="95%" height="100%" src="${dataImage[i]}" alt="">`
                }
                console.log(convertImg);
                if(date.value != ""){
                    console.log(date.valueAsDate.getDate()+'/'+month_data[date.valueAsDate.getMonth()]+'/'+date.valueAsDate.getFullYear());
                }
                // console.log(g_date.getDate()+'/'+month_data[g_date.getMonth()]+'/'+g_date.getFullYear());
                if(myEditor.getData() != "" ){
                    let data = {
                        date: date,
                        content: myEditor.getData(),
                        image: convertImg
                    }
                    uploadData({...data})
                }
                console.log('successful')
            }
        });
    }
);
}

//end upload image

submit.addEventListener('click', () => {
    // console.log(date.value);
    // console.log(myEditor.getData());
    // console.log(file);


    dataPreviousImage.map(file=>uploadFile(file));

    // if(date.value != ""){
    //     console.log(date.valueAsDate.getDate()+'/'+month_data[date.valueAsDate.getMonth()]+'/'+date.valueAsDate.getFullYear());
    // }
    // // console.log(g_date.getDate()+'/'+month_data[g_date.getMonth()]+'/'+g_date.getFullYear());
    // if(myEditor.getData() != "" ){
    //     let data = {
    //         date: date,
    //         content: myEditor.getData(),
    //         // image: file.value
    //     }
    //     uploadData({...data})
    // }
});

// getDataFromFireBase();


async function uploadData({date, content, image}){
    console.log(content)
    // console.log(date)
    try {
        const docRef = await addDoc(collection(db, "hieuthaohtml"), {
            time: (date.value != "")?date.valueAsDate.getDate()+'/'+month_data[date.valueAsDate.getMonth()]+'/'+date.valueAsDate.getFullYear():g_date.getDate()+'/'+month_data[g_date.getMonth()]+'/'+g_date.getFullYear(),
            content: content,
            image: image
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}



