let color1 = document.getElementsByClassName("color1");
let color2 = document.getElementsByClassName("color2");
let color3 = document.getElementsByClassName("color3");
let color4 = document.getElementsByClassName("color4");
let h_modal = document.getElementById("h_modal");
let bc_modal = document.getElementById("bc_modal");
let p_modal_button = document.getElementById("p_modal_button");
let n_modal_button = document.getElementById("n_modal_button");
let c_modal = document.getElementById("c_modal");
let container = document.getElementById("container");
let getId_image = [];



// -------------------------------FUNCTIONS--------------------------------- //
// console.log(color4)
for(let i = 0; i < color1.length; i++){
    color1[i].addEventListener("click",clickImage)
    // if(color1[i].id != ''){
    //     getId_image.push({
    //         id: color1[i].id,
    //         src: color1[i].children[0].attributes[0].value
    //     });
    // }
    if(color1[i].children.length != 0){
        // if(getId_image.find((f)=> f.src == color1[i].children[0].attributes[0].value)){
            getId_image.push({
                // id: color1[i].id,
                src: color1[i].children[0].attributes[0].value
            });
        // }
    }
    // console.log(color1)
    // console.log(color1[i].children[0].attributes[0].value) //color1[i].children[0].src // se ra url
}

function clickImage(property){
    h_modal.style.zIndex = "10";
    h_modal.style.opacity = 1;
    container.style.zIndex = "0";
    // if(getId_image.find((f)=> f.id == property.target.parentNode.id) != undefined){
        //     c_modal.children[0].attributes[0].value = getId_image.find((f)=> f.id == property.target.parentNode.id).src;
        //     console.log("testst")
        // }
    if(getId_image.find((f)=> f.src == property.target.attributes[0].value) != undefined){
        c_modal.children[0].attributes[0].value = getId_image.find((f)=> f.src == property.target.attributes[0].value).src;
    }
    // console.log(getId_image.find((f)=> f.src == 'image/72c17c9f004ddd13845c.jpg'))
    // console.log(property.target.attributes[0].value)
    // console.log("image click");
}

bc_modal.addEventListener("click", function(){
    h_modal.style.zIndex = "0";
    h_modal.style.opacity = 0;
    container.style.zIndex = "10";
    // console.log("b_modal");
})

p_modal_button.addEventListener("click", function(){
    let index = getId_image.map(function (img) { return img.src; }).indexOf(c_modal.children[0].attributes[0].value);
    if(index >= 0){
        // c_modal.innerHTML = `<img src="image/2af5673714e5c9bb90f4.jpg" alt="">`;
        c_modal.innerHTML = `<img src="${getId_image[index-1].src}" alt="">`;
        // c_modal.children[0].attributes[0].value = 'image/72c17c9f004ddd13845c.jpg';
        // console.log(index);
        // console.log("previous image");
    }
})

n_modal_button.addEventListener("click", function(){
    let index = getId_image.map(function (img) { return img.src; }).indexOf(c_modal.children[0].attributes[0].value);
    c_modal.innerHTML = `<img src="${getId_image[index+1].src}" alt="">`;
    // console.log("next image");
    // console.log(index);
    // console.log()
})


// function find(needle, haystack) {
//     var results = [];
//     var idx = haystack.indexOf(needle);
//     while (idx != -1) {
//         results.push(idx);
//         idx = haystack.indexOf(needle, idx + 1);
//     }
//     return results;
// }

console.log(getId_image);
// console.log(getId_image.find((f)=> f.src == 'image/72c17c9f004ddd13845c.jpg'));
// console.log(getId_image.filter((item, index) => getId_image.indexOf(item) === index))
// console.log(getId_image.find((f)=> f.id == 'bdh_image_3'))
// console.log(c_modal.children[0].attributes[0].value);

// var index = getId_image.map(function (img) { return img.src; }).indexOf('image/72c17c9f004ddd13845c.jpg');
// console.log(index);