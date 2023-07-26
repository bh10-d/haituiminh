import { getDocs, collection, db, addDoc, getDataFromFireBase } from '../js/firebase.js';
import "https://cdn.ckeditor.com/ckeditor5/38.1.1/classic/ckeditor.js"; //CKeditor5 

let submit = document.getElementById('submit');
let date = document.getElementById('date');
let content = document.getElementById('content');
let myEditor;
let file = document.querySelector('#file');
let showImage = document.getElementById('showimage');
let g_date = new Date();
let month_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


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

file.addEventListener("change", (event) => {
	const { files } = event.target;
	showImage.innerHTML = `<img src="/image/${files[0].name}"/>`
	console.log("files", files)
})

submit.addEventListener('click', () => {
    // console.log(date.value);
    console.log(myEditor.getData());
    console.log(file);

    
    if(date.value != ""){
        console.log(date.valueAsDate.getDate()+'/'+month_data[date.valueAsDate.getMonth()]+'/'+date.valueAsDate.getFullYear());
    }
    // console.log(g_date.getDate()+'/'+month_data[g_date.getMonth()]+'/'+g_date.getFullYear());
    if(myEditor.getData() != "" ){
        let data = {
            date: date,
            content: myEditor.getData(),
            // image: file.value
        }
        // uploadData({...data})
    }
});

// getDataFromFireBase();


async function uploadData({date, content, image}){
    console.log(content)
    // console.log(date)
    try {
        const docRef = await addDoc(collection(db, "hieuthaohtml"), {
            time: (date.value != "")?date.valueAsDate.getDate()+'/'+month_data[date.valueAsDate.getMonth()]+'/'+date.valueAsDate.getFullYear():g_date.getDate()+'/'+month_data[g_date.getMonth()]+'/'+g_date.getFullYear(),
            content: content
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}



